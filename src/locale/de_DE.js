import React from 'react'
import { FaHeadphonesIcon } from '../components/Icon'

export default {
  playModeText: {
    order: 'In Reihenfolge abspielen',
    orderLoop: 'Endlosschleife',
    singleLoop: 'Einzelschleife',
    shufflePlay: 'Zufallswiedergabe',
  },
  openText: 'Öffnen',
  closeText: 'Schließen',
  emptyText: 'Keine Titel',
  clickToPlayText: 'Zur Widergabe klicken',
  clickToPauseText: 'Zum Anhalten klicken',
  nextTrackText: 'Nächster Titel',
  previousTrackText: 'Vorheriger Titel',
  reloadText: 'Neu laden',
  volumeText: 'Lautstärke',
  playListsText: 'Wiedergabeliste',
  toggleLyricText: 'Liedtexte umschalten',
  toggleMiniModeText: 'Minimieren',
  destroyText: 'Schließen',
  downloadText: 'Herunterladen',
  lightThemeText: 'H',
  darkThemeText: 'D',
  switchThemeText: 'Dunkel / Hell-Modus',
  removeAudioListsText: 'Lösche Wiedergabeliste',
  clickToDeleteText: (name) => `Klicken Sie, um ${name} zu löschen`,
  controllerTitle: <FaHeadphonesIcon />,
  emptyLyricText: 'Keine Liedtexte',
  loadingText: 'Laden',
}
