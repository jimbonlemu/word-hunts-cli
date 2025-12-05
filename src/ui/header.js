import { t } from '../i18n/index.js';

export function printHeader(config) {
  const headerItems = [
    { label: t('header_table_mode'), value: config.TABLE_MODE ? "ON" : "OFF" },
    { label: t('header_max_results'), value: config.MAX_RESULTS },
    { label: t('header_columns'), value: config.COLUMNS },
    { label: t('header_cell_width'), value: config.CELL_WIDTH }
  ];

  const lines = [
    `
=====================================================================
██     ██ ▄████▄ █████▄  ████▄    ██  ██ ██  ██ ███  ██ ██████ ▄█████
██ ▄█▄ ██ ██  ██ ██▄▄██▄ ██  ██   ██████ ██  ██ ██ ▀▄██   ██   ▀▀▀▄▄▄
 ▀██▀██▀  ▀████▀ ██   ██ ████▀    ██  ██ ▀████▀ ██   ██   ██   █████▀
=====================================================================
    `,

    ...headerItems.map(item => `${item.label.padEnd(15, ' ')}: ${item.value}`),

    `${t('header_commands')}`,
    `  table on/off  (${t('header_aliases')} tbon/tboff)`,
    `  sres <num>    (${t('header_set_result_limit')})`,
    `  scol <num>    (${t('header_set_columns')})`,
    `  scw  <num>    (${t('header_set_cell_width')})`,
    `  /lang <code>  (${t('header_set_language')})`,
    `  getui         (${t('header_get_ui')})`,
    `  /q            (${t('header_quit')})`,
    ""
  ];
  console.log(lines.join("\n"));
}
