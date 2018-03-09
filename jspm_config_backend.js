SystemJS.config({
map: {
  "libs_common/content_script_utils": "libs_backend/content_script_utils",
  "libs_common/require_remote_utils": "libs_backend/require_remote_utils",
  "libs_backend/expose_backend_libs": "generated_libs/libs_backend/expose_backend_libs",
  "libs_common/ajax_utils": "libs_backend/ajax_utils",
  "libs_frontend/ajax_utils": "generated_libs/libs_frontend/ajax_utils",
  "libs_common/cacheget_utils": "libs_backend/cacheget_utils",
  "libs_frontend/cacheget_utils": "generated_libs/libs_frontend/cacheget_utils",
  "libs_common/db_utils": "libs_backend/db_utils",
  "libs_frontend/db_utils": "generated_libs/libs_frontend/db_utils",
  "libs_common/debug_console_utils": "libs_backend/debug_console_utils",
  "libs_frontend/debug_console_utils": "generated_libs/libs_frontend/debug_console_utils",
  "libs_common/disable_habitlab_utils": "libs_backend/disable_habitlab_utils",
  "libs_frontend/disable_habitlab_utils": "generated_libs/libs_frontend/disable_habitlab_utils",
  "libs_common/duolingo_utils": "libs_backend/duolingo_utils",
  "libs_frontend/duolingo_utils": "generated_libs/libs_frontend/duolingo_utils",
  "libs_common/favicon_utils": "libs_backend/favicon_utils",
  "libs_frontend/favicon_utils": "generated_libs/libs_frontend/favicon_utils",
  "libs_common/fetch_page_utils": "libs_backend/fetch_page_utils",
  "libs_frontend/fetch_page_utils": "generated_libs/libs_frontend/fetch_page_utils",
  "libs_common/gamification_utils": "libs_backend/gamification_utils",
  "libs_frontend/gamification_utils": "generated_libs/libs_frontend/gamification_utils",
  "libs_common/goal_progress": "libs_backend/goal_progress",
  "libs_frontend/goal_progress": "generated_libs/libs_frontend/goal_progress",
  "libs_common/goal_utils": "libs_backend/goal_utils",
  "libs_frontend/goal_utils": "generated_libs/libs_frontend/goal_utils",
  "libs_common/goal_vars_backend": "libs_backend/goal_vars_backend",
  "libs_frontend/goal_vars_backend": "generated_libs/libs_frontend/goal_vars_backend",
  "libs_common/history_utils": "libs_backend/history_utils",
  "libs_frontend/history_utils": "generated_libs/libs_frontend/history_utils",
  "libs_common/intervention_feedback_utils": "libs_backend/intervention_feedback_utils",
  "libs_frontend/intervention_feedback_utils": "generated_libs/libs_frontend/intervention_feedback_utils",
  "libs_common/intervention_session_vars_backend": "libs_backend/intervention_session_vars_backend",
  "libs_frontend/intervention_session_vars_backend": "generated_libs/libs_frontend/intervention_session_vars_backend",
  "libs_common/intervention_utils": "libs_backend/intervention_utils",
  "libs_frontend/intervention_utils": "generated_libs/libs_frontend/intervention_utils",
  "libs_common/intervention_vars_backend": "libs_backend/intervention_vars_backend",
  "libs_frontend/intervention_vars_backend": "generated_libs/libs_frontend/intervention_vars_backend",
  "libs_common/localization_utils_backend": "libs_backend/localization_utils_backend",
  "libs_frontend/localization_utils_backend": "generated_libs/libs_frontend/localization_utils_backend",
  "libs_common/log_utils": "libs_backend/log_utils",
  "libs_frontend/log_utils": "generated_libs/libs_frontend/log_utils",
  "libs_common/notification_utils_backend": "libs_backend/notification_utils_backend",
  "libs_frontend/notification_utils_backend": "generated_libs/libs_frontend/notification_utils_backend",
  "libs_common/persistent_storage_utils": "libs_backend/persistent_storage_utils",
  "libs_frontend/persistent_storage_utils": "generated_libs/libs_frontend/persistent_storage_utils",
  "libs_common/screenshot_utils": "libs_backend/screenshot_utils",
  "libs_frontend/screenshot_utils": "generated_libs/libs_frontend/screenshot_utils",
  "libs_common/session_utils": "libs_backend/session_utils",
  "libs_frontend/session_utils": "generated_libs/libs_frontend/session_utils",
  "libs_common/streak_utils": "libs_backend/streak_utils",
  "libs_frontend/streak_utils": "generated_libs/libs_frontend/streak_utils",
  "libs_common/tab_utils": "libs_backend/tab_utils",
  "libs_frontend/tab_utils": "generated_libs/libs_frontend/tab_utils",
  "jquery-contextmenu": "modules_custom/jquery-contextmenu/dist/jquery.contextMenu.js",
  "jquery-inview": "modules_custom/jquery-inview/jquery.inview.js",
  "jquery.isinview": "modules_custom/jquery.isinview/dist/jquery.isinview.js",
  "jquery.pagepiling": "modules_custom/jquery.pagepiling/jquery.pagepiling.js",
  "jquery.terminal": "modules_custom/jquery.terminal/js/jquery.terminal-0.10.12.js"
}
});