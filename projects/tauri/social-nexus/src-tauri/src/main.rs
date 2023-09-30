// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::Manager;
use window_shadows::set_shadow;

fn main() {
    let context = tauri::generate_context!();
    let app = tauri::Builder::default()
        .setup(|app| {
            // Obtiene una referencia a la ventana principal
            let window = app.get_window("main"); // "main" es el nombre de la ventana principal, puedes cambiarlo si es necesario

            // Comprueba si la ventana se pudo obtener
            if let Some(window) = window {
                // Activa las sombras para la ventana (si estás utilizando window_shadows)
                #[cfg(any(windows, target_os = "windows"))]
                set_shadow(&window, true).unwrap();
            }

            Ok(())
        })
        .run(context);

    if let Err(e) = app {
        eprintln!("Error while running Tauri application: {:?}", e);
    }

    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
