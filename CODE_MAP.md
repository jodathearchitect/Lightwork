# Lightwork Code Map

**Source:** `lightwork.html` · **Version:** Lightwork v0.9.28 · **Lines:** 13063

> Regenerate after edits with `npm run map` — line numbers drift.

## Major sections (JS banners)

| Line | Section |
|---|---|
| 3734 | ICON REGISTRY |
| 3775 | STATE |
| 3979 | Unified Stretch & Hold routine state |
| 4122 | ONBOARDING |
| 4235 | PERSISTENCE |
| 4712 | APP INIT |
| 4741 | TIME |
| 4792 | WEEK STRIP |
| 4839 | RING |
| 5093 | FAST CONTROLS |
| 5528 | MILESTONES |
| 5547 | ACHIEVEMENTS |
| 6522 | EARNED ENERGY ENGINE |
| 6753 | EXERCISE CARDS |
| 6849 | EXERCISE LIBRARY |
| 6925 | REST DAY |
| 6934 | SET TRIPPIN |
| 6967 | SET TRIPPIN' DAILY SYSTEM |
| 7929 | TABATA (standalone) |
| 7995 | WORKOUT HISTORY STRIP |
| 8064 | PRESETS |
| 8197 | WORKOUT PLAYER |
| 8200 | SOUND ENGINE |
| 8628 | STRETCH & HOLD — UNIFIED ROUTINE ENGINE |
| 8989 | SETS — INLINE MODULE |
| 9132 | Sets library picker sheet (mirrors stretch-library) |
| 9195 | STRETCH / MOBILITY LIBRARY |
| 9259 | NAVIGATION |
| 9275 | SHEETS |
| 9842 | Stretch library picker sheet |
| 11747 | START |

## Data tables (UPPERCASE consts)

| Line | Table |
|---|---|
| 3740 | `ICONS` |
| 3787 | `FAST_GUARDRAILS` |
| 3830 | `FAST_TYPES` |
| 3967 | `PLANK_VARIATIONS` |
| 3973 | `PLANK_GOALS` |
| 4009 | `FPS` |
| 4014 | `PHASES` |
| 4029 | `MILESTONES` |
| 4041 | `EX_CONFIG` |
| 4102 | `EX_CATEGORIES` |
| 4112 | `MOVE_LINES` |
| 4236 | `DB_KEY` |
| 4596 | `TWENTY_FOUR_HRS` |
| 4960 | `RING_PALETTE` |
| 4963 | `SVGNS` |
| 5130 | `FAST_START_MESSAGES` |
| 5198 | `FEEDING_GUIDE` |
| 5552 | `ACHIEVEMENTS` |
| 6043 | `EXERCISE_TIPS` |
| 6051 | `TL_MILESTONES` |
| 6523 | `BADGES` |
| 6533 | `FAST_TYPE_MULTIPLIERS` |
| 6547 | `EX_KCAL_PER_REP` |
| 6936 | `ST_EXERCISES` |
| 6956 | `ST_CATEGORIES` |
| 7464 | `ST_COMBO` |
| 7465 | `ST_COMBO_WINDOW` |
| 9196 | `STRETCH_MOVES` |
| 9234 | `STRETCH_CATS` |
| 9542 | `FAST_COMBO_CATS` |
| 9564 | `FAST_COMBOS` |
| 11764 | `HABIT_PRESETS` |
| 11928 | `PL_KEY` |
| 12179 | `F30_KEY` |
| 12383 | `GOALS_RING_STOPS` |
| 12581 | `HABIT_ICONS` |
| 12757 | `WEEKLY_SEED` |
| 12873 | `MICRO_SEED` |

## CSS blocks (style-section comments)

| Line | Block |
|---|---|
| 141 | Noise grain layer — now inside the backdrop div |
| 167 | ONBOARDING |
| 169 | Hide nav/quick-actions while onboarding is on screen |
| 228 | MAIN APP |
| 238 | WEEK STRIP |
| 252 | GREETING |
| 258 | RING  |
| 263 | FEEDING WINDOW — cool green recovery / cooldown state |
| 293 | Inner workout ring |
| 296 | Pulse animation on active fast |
| 431 | Tier 0 — a gentle ember presence the moment a fast begins |
| 534 | ACTIVITY CARD |
| 549 | INSIGHT CARD |
| 552 | EARNED ENERGY CARD |
| 669 | Unified wrapper — quick-actions + nav tabs as one glass pill |
| 705 | Icon buttons match the nav bar exactly — same dark glass feel |
| 749 | PAGES |
| 763 | MOVE PAGE |
| 770 | PRESET CARDS |
| 784 | WORKOUT PLAYER |
| 791 | Rep slider |
| 810 | EXERCISE CARDS |
| 832 | PLANK |
| 864 | Running states |
| 940 | Variation chips |
| 963 | Mode toggle |
| 987 | Goal pills |
| 1008 | Timer display |
| 1051 | Buttons |
| 1080 | History strip |
| 1110 | TABATA |
| 1187 | Planner sheet interior — luminous pass |
| 1245 | Braindump + notes |
| 1319 | Endgame footer — the pull |
| 1332 | Compact 3-across variant — icon stacked above name |
| 1346 | Legacy pill class kept for any stale references |
| 1391 | MOVE SUMMARY |
| 1398 | SHEETS |
| 1441 | Goal engine |
| 1463 | FAST COMPLETE OVERLAY |
| 1514 | MILESTONE TOAST |
| 1683 | Achievements page |
| 1724 | All-time stats block |
| 1782 | Today |
| 1812 | Week grid |
| 1830 | Tier list rows |
| 1865 | WATER LOG |
| 1870 | CALENDAR |
| 1882 | WEIGHT LOG |
| 1887 | Teaser card on Move page |
| 1934 | Subtle moving stars |
| 1987 | Scoreboard — total reps |
| 2030 | Conquered dots |
| 2044 | Total progress arc |
| 2126 | Card top row |
| 2282 | Combo number that flies up from the rep number |
| 2303 | NEW BEST badge floating |
| 2540 | Close out day button |
| 2632 | Sunburst rays |
| 2650 | Floating sparkles |
| 2697 | Branded header |
| 2734 | The big number |
| 2754 | Per-exercise rows |
| 2807 | Footer line |
| 2872 | Picker option |
| 2895 | Edit goal stepper |
| 2939 | Remove button on exercise card |
| 2960 | Empty state |
| 2972 | Sunset ombre veil for day sheets |

## Structural element ids

| Line | id |
|---|---|
| 3089 | `#aurora-bg` |
| 3096 | `#fastCompleteOverlay` |
| 3099 | `#fcoScroll` |
| 3103 | `#setTrippinScreen` |
| 3118 | `#stScoreNum` |
| 3122 | `#stScorePct` |
| 3123 | `#stScoreConq` |
| 3124 | `#stScoreDots` |
| 3127 | `#stArcFill` |
| 3129 | `#stDailyStrip` |
| 3133 | `#stScreenBody` |
| 3142 | `#stSheetOverlay` |
| 3143 | `#stSheet` |
| 3145 | `#stSheetContent` |
| 3151 | `#stCelebrate` |
| 3152 | `#stCelebContent` |
| 3156 | `#milestoneToast` |
| 3157 | `#toastTitle` |
| 3158 | `#toastBody` |
| 3162 | `#onboarding` |
| 3163 | `#obProgress` |
| 3166 | `#ob0` |
| 3180 | `#ob1` |
| 3190 | `#ob2` |
| 3231 | `#ob3` |
| 3234 | `#obGoalOpts` |
| 3245 | `#ob4` |
| 3248 | `#obActOpts` |
| 3259 | `#ob5` |
| 3262 | `#obDietOpts` |
| 3275 | `#ob6` |
| 3279 | `#obProtoOpts` |
| 3286 | `#obExChips` |
| 3300 | `#ob7` |
| 3305 | `#sumCal` |
| 3306 | `#sumFast` |
| 3307 | `#sumTDEE` |
| 3308 | `#sumEx` |
| 3312 | `#sumProt` |
| 3313 | `#sumCarbs` |
| 3314 | `#sumFats` |
| 3322 | `#main-app` |
| 3325 | `#page-today` |
| 3334 | `#weekStrip` |
| 3339 | `#coachLine` |
| 3341 | `#fastSetupBadge` |
| 3352 | `#ringContainer` |
| 3353 | `#ringAmbient` |
| 3354 | `#ringHalo` |
| 3356 | `#ringFireGlow` |
| 3357 | `#ringEmbers` |
| 3359 | `#ringFeedingGlow` |
| 3442 | `#ringCenter` |
| 3447 | `#ringActions` |
| 3454 | `#todayPlanBanner` |
| 3459 | `#sleepPromptCard` |
| 3462 | `#insightCard` |
| 3465 | `#weeklyProjectionCard` |
| 3469 | `#earnedCard` |
| 3475 | `#page-habits` |
| 3483 | `#habitsTabBody` |
| 3487 | `#page-move` |
| 3494 | `#moveCoach` |
| 3502 | `#restDayBanner` |
| 3512 | `#moveActiveContent` |
| 3516 | `#moveToolPills` |
| 3538 | `#moveToolPanels` |
| 3540 | `#panel-sets` |
| 3541 | `#setsCard` |
| 3544 | `#panel-tabata` |
| 3550 | `#tabataPhase` |
| 3551 | `#tabataCount` |
| 3552 | `#tabataInfo` |
| 3553 | `#tabataBar` |
| 3561 | `#panel-stretch` |
| 3562 | `#plankCard` |
| 3573 | `#presetCards` |
| 3581 | `#workoutPlayer` |
| 3597 | `#wpReadyScreen` |
| 3598 | `#wpReadyName` |
| 3599 | `#wpReadyEx` |
| 3600 | `#wpReadyMeta` |
| 3617 | `#wpRoundInfo` |
| 3619 | `#wpExName` |
| 3621 | `#wpPhase` |
| 3623 | `#wpCount` |
| 3626 | `#wpBar` |
| 3629 | `#wpSetDots` |
| 3631 | `#wpAddReps` |
| 3633 | `#wpRepBtns` |
| 3636 | `#wpUpNext` |
| 3666 | `#workoutComplete` |
| 3678 | `#wcSummary` |
| 3679 | `#wcStats` |
| 3680 | `#wcBadges` |
| 3695 | `#bottomBar` |
| 3705 | `#tab-today` |
| 3709 | `#tab-habits` |
| 3713 | `#tab-move` |
| 3722 | `#sheet-overlay` |
| 3723 | `#sheet-content` |
| 3729 | `#day-detail-overlay` |
| 3730 | `#day-detail-content` |
| 5356 | `#feedTimerLine` |
| 5892 | `#achPageBody` |
| 6778 | `#rem-${key}` |
| 6780 | `#prog-${key}` |
| 6783 | `#done-${key}` |
| 7419 | `#setsEgVal` |
| 7513 | `#stCard'+exIdx+'` |
| 7516 | `#stBestWrap'+exIdx+'` |
| 7526 | `#stSub'+exIdx+'` |
| 7538 | `#stCount'+exIdx+'` |
| 7540 | `#stCombo'+exIdx+'` |
| 7542 | `#stPct'+exIdx+'` |
| 7547 | `#stBar'+exIdx+'` |
| 7548 | `#stBarExtra'+exIdx+'` |
| 7864 | `#stCelebStat` |
| 8155 | `#epChips` |
| 8157 | `#epRounds` |
| 8160 | `#epWork` |
| 8163 | `#epRest` |
| 8331 | `#sliderDisplay` |
| 8901 | `#plankTimer` |
| 8933 | `#plankTimer` |
| 8941 | `#plankTimer` |
| 8942 | `#plankBar` |
| 8943 | `#stretchCue` |
| 9008 | `#setsTotalBadge` |
| 9048 | `#stCard'+exIdx+'` |
| 9051 | `#stBestWrap'+exIdx+'` |
| 9056 | `#stSub'+exIdx+'` |
| 9068 | `#stCombo'+exIdx+'` |
| 9070 | `#stPct'+exIdx+'` |
| 9075 | `#stBar'+exIdx+'` |
| 9076 | `#stBarExtra'+exIdx+'` |
| 9144 | `#setsLibCatRow` |
| 9145 | `#setsLibGrid` |
| 9463 | `#estDisplayDate` |
| 9464 | `#estDisplayTime` |
| 9779 | `#goal-${k}` |
| 9808 | `#tcWork` |
| 9816 | `#tcRest` |
| 9824 | `#tcRounds` |
| 9847 | `#libCatRow` |
| 9848 | `#libGrid` |
| 9918 | `#waterDots` |
| 10445 | `#profileSaved` |
| 10519 | `#goalEngineWrap` |
| 11731 | `#gs-${key}` |
| 12020 | `#plSheet` |
| 12336 | `#f30SheetBadge` |
| 12550 | `#plBarSlot` |
| 12965 | `#mgTimerText` |
| 12983 | `#mgTimerText` |

## Functions (435)

| Line | Function |
|---|---|
| 3762 | `ico()` |
| 3797 | `getGuardrailLevel()` |
| 3809 | `checkFastGuardrails()` |
| 4124 | `buildObProgress()` |
| 4133 | `showOBSlide()` |
| 4139 | `nextOB()` |
| 4161 | `prevOB()` |
| 4162 | `selectOpt()` |
| 4169 | `selectProto()` |
| 4174 | `toggleChip()` |
| 4179 | `calcTDEE()` |
| 4192 | `getMacros()` |
| 4197 | `buildSummary()` |
| 4213 | `finishOB()` |
| 4228 | `quickStart()` |
| 4238 | `archiveDay()` |
| 4328 | `archiveTodayWithTabata()` |
| 4354 | `prefsAvailable()` |
| 4357 | `writeMirror()` |
| 4367 | `readAsync()` |
| 4378 | `readSync()` |
| 4385 | `saveState()` |
| 4427 | `loadState()` |
| 4437 | `loadStateAsync()` |
| 4445 | `_applyLoadedState()` |
| 4622 | `saveNow()` |
| 4627 | `startAutoSave()` |
| 4713 | `initApp()` |
| 4742 | `updateStatusTime()` |
| 4747 | `updateTimeOfDay()` |
| 4752 | `tickSecond()` |
| 4793 | `buildWeekStrip()` |
| 4840 | `buildTickMarks()` |
| 4855 | `updateRingIdle()` |
| 4885 | `getGoalEndTime()` |
| 4900 | `applyFireTier()` |
| 4943 | `resetFireTier()` |
| 4961 | `_hexA()` |
| 4962 | `setRingSpectrum()` |
| 4996 | `updateRingActive()` |
| 5059 | `updateCoachByPhase()` |
| 5094 | `startFast()` |
| 5141 | `showFastStartToast()` |
| 5148 | `endFast()` |
| 5237 | `getFeedingGuide()` |
| 5242 | `getFeedingWindowSec()` |
| 5247 | `fmtFeedDuration()` |
| 5255 | `enterFeedingWindow()` |
| 5306 | `updateRingFeeding()` |
| 5340 | `renderFeedingPanel()` |
| 5398 | `endFeedingWindow()` |
| 5426 | `buildFCOHTML()` |
| 5458 | `showFastComplete()` |
| 5510 | `closeFastComplete()` |
| 5516 | `shareFastSummary()` |
| 5529 | `checkMilestones()` |
| 5539 | `showMilestoneToast()` |
| 5604 | `achGet()` |
| 5609 | `achStore()` |
| 5615 | `achIsUnlocked()` |
| 5621 | `achUnlock()` |
| 5643 | `achCheckFasting()` |
| 5651 | `achCheckDailyReps()` |
| 5666 | `achCheckSession()` |
| 5684 | `achGetActivityDates()` |
| 5699 | `achComputeStreak()` |
| 5716 | `achCheckStreak()` |
| 5728 | `achCheckDuration()` |
| 5743 | `achListDurationEarned()` |
| 5751 | `achCheckAll()` |
| 5758 | `achComputeStats()` |
| 5825 | `achShowToast()` |
| 5831 | `achShowCinematic()` |
| 5865 | `achCloseCinematic()` |
| 5872 | `openAchievementsPage()` |
| 5879 | `closeAchievementsPage()` |
| 5885 | `buildAchievementsPage()` |
| 5900 | `renderAchievementsPage()` |
| 5920 | `progressFor()` |
| 6063 | `getNextMilestone()` |
| 6069 | `getCurrentPhaseData()` |
| 6074 | `getExTip()` |
| 6077 | `fmtCountdown()` |
| 6095 | `renderWeeklyProjectionCard()` |
| 6107 | `buildWeeklyProjectionCard()` |
| 6359 | `renderInsightCard()` |
| 6410 | `_buildInsightCardDOM()` |
| 6517 | `updateActivityCard()` |
| 6562 | `buildEarnedGoalBar()` |
| 6626 | `burnPerHour()` |
| 6634 | `calcEarnedKcal()` |
| 6668 | `getBadge()` |
| 6674 | `renderEarnedCard()` |
| 6754 | `buildExCards()` |
| 6769 | `buildExCardHTML()` |
| 6786 | `logReps()` |
| 6797 | `updateExCard()` |
| 6822 | `resetEx()` |
| 6834 | `updateMoveSummary()` |
| 6838 | `updateMoveCoach()` |
| 6844 | `updateVolumeBadge()` |
| 6853 | `buildExerciseLibrary()` |
| 6858 | `buildLibCategoryBar()` |
| 6874 | `buildLibChips()` |
| 6897 | `buildFocusSelected()` |
| 6913 | `removeFocus()` |
| 6918 | `addFocusToNewPreset()` |
| 6927 | `toggleRestDay()` |
| 6970 | `stTodayKey()` |
| 6975 | `stYesterdayKey()` |
| 6982 | `stCheckDailyReset()` |
| 7017 | `stCloseOutDay()` |
| 7051 | `stGetTodayTotal()` |
| 7058 | `stGetYesterdayTotal()` |
| 7066 | `stGetBestDay()` |
| 7074 | `stRenderDailyStrip()` |
| 7125 | `stOpenSettings()` |
| 7151 | `stSettingsAdj()` |
| 7158 | `stSettingsSave()` |
| 7177 | `stRenderDailyCard()` |
| 7232 | `toggleMoveTool()` |
| 7262 | `buildSetTrippin()` |
| 7293 | `stOpen()` |
| 7305 | `stClose()` |
| 7312 | `stAddExercise()` |
| 7324 | `stRemoveExercise()` |
| 7335 | `stOpenSheet()` |
| 7339 | `stCloseSheet()` |
| 7344 | `stPickExercise()` |
| 7373 | `stAddFromPicker()` |
| 7381 | `stEditGoal()` |
| 7410 | `sheetSetsEditGoal()` |
| 7427 | `setsEgAdj()` |
| 7434 | `setsEgSave()` |
| 7443 | `stEgAdj()` |
| 7450 | `stEgSave()` |
| 7468 | `stTier()` |
| 7475 | `stRenderScreen()` |
| 7573 | `stUpdateHero()` |
| 7621 | `stUpdateDisplay()` |
| 7692 | `stShowCombo()` |
| 7703 | `stAddReps()` |
| 7753 | `stFinish()` |
| 7836 | `stShowCelebration()` |
| 7919 | `stCloseCelebration()` |
| 7930 | `toggleTabata()` |
| 7945 | `tabataTick()` |
| 7973 | `resetTabata()` |
| 7980 | `updateTabataDisplay()` |
| 8007 | `buildWorkoutHistoryStrip()` |
| 8079 | `buildPresetCards()` |
| 8114 | `setActivePreset()` |
| 8118 | `deletePreset()` |
| 8123 | `openEditPreset()` |
| 8127 | `openSheetWithData()` |
| 8140 | `buildEditPresetSheet()` |
| 8169 | `adjEP()` |
| 8176 | `savePreset()` |
| 8203 | `getAudioCtx()` |
| 8214 | `playTone()` |
| 8232 | `playWorkStart()` |
| 8240 | `playClick()` |
| 8248 | `playRestStart()` |
| 8255 | `playRestWarning()` |
| 8261 | `playWhistle()` |
| 8289 | `launchPreset()` |
| 8306 | `beginWP()` |
| 8320 | `buildRepSlider()` |
| 8326 | `render()` |
| 8386 | `renderPlayerUI()` |
| 8451 | `getNextWPEx()` |
| 8457 | `addWPReps()` |
| 8468 | `startWP()` |
| 8473 | `toggleWorkoutPlayer()` |
| 8485 | `wpTick()` |
| 8499 | `advanceWP()` |
| 8530 | `endWorkoutPlayer()` |
| 8547 | `showWorkoutComplete()` |
| 8610 | `closeWorkoutComplete()` |
| 8633 | `stretchFmt()` |
| 8639 | `stretchEntrySec()` |
| 8644 | `stretchRoutineTotal()` |
| 8652 | `stretchAddMove()` |
| 8658 | `stretchRemoveAt()` |
| 8663 | `stretchClearRoutine()` |
| 8670 | `stretchChipPressStart()` |
| 8677 | `stretchChipPressEnd()` |
| 8685 | `stretchPromptCustomTime()` |
| 8700 | `setStretchDefault()` |
| 8707 | `toggleStretchRoutine()` |
| 8728 | `stretchTick()` |
| 8775 | `stretchFinishRoutine()` |
| 8795 | `stretchStopRoutine()` |
| 8804 | `stretchSkipMove()` |
| 8824 | `stretchResetRoutine()` |
| 8835 | `stretchSessions()` |
| 8841 | `renderStretchModule()` |
| 8965 | `updateStretchTimerUI()` |
| 8986 | `renderPlankCard()` |
| 8994 | `renderSetsModule()` |
| 9104 | `setsRefreshTotal()` |
| 9117 | `stFinishInline()` |
| 9125 | `setsClearSession()` |
| 9134 | `sheetSetsLibrary()` |
| 9151 | `renderSetsLibCats()` |
| 9158 | `setsLibSelCat()` |
| 9163 | `renderSetsLibGrid()` |
| 9183 | `setsLibAdd()` |
| 9246 | `stretchMoveByKey()` |
| 9249 | `stretchUsage()` |
| 9253 | `bumpStretchUsage()` |
| 9260 | `switchTab()` |
| 9271 | `scrollToRing()` |
| 9277 | `openSheet()` |
| 9289 | `_injectSheetClose()` |
| 9311 | `closeSheet()` |
| 9317 | `closeSheetOverlay()` |
| 9320 | `buildSheet()` |
| 9343 | `sheetLogMeal()` |
| 9356 | `logMeal()` |
| 9364 | `sheetEndFast()` |
| 9419 | `sheetEndFeeding()` |
| 9446 | `sheetEditStartTime()` |
| 9502 | `adjStartTime()` |
| 9520 | `applyEditStartTime()` |
| 9566 | `sheetChangeProto()` |
| 9651 | `fsSheetRerender()` |
| 9660 | `fsCustomDurToggle()` |
| 9665 | `applyFastCombo()` |
| 9674 | `updateFastSetupBadge()` |
| 9683 | `changeProto()` |
| 9695 | `setCustomProtoHours()` |
| 9708 | `selectFastType()` |
| 9716 | `saveCustomAllowance()` |
| 9722 | `sheetFastHistory()` |
| 9742 | `_wireFastHistoryLongPress()` |
| 9772 | `sheetEditGoals()` |
| 9788 | `adjGoal()` |
| 9795 | `saveGoals()` |
| 9800 | `sheetTabataConfig()` |
| 9831 | `adjTab()` |
| 9837 | `saveTabata()` |
| 9843 | `sheetStretchLibrary()` |
| 9856 | `renderLibCats()` |
| 9864 | `libSelCat()` |
| 9870 | `renderLibGrid()` |
| 9898 | `libAdd()` |
| 9912 | `sheetWater()` |
| 9922 | `logWater()` |
| 9942 | `getRollingAvgBurn()` |
| 9968 | `getStartingWeight()` |
| 9980 | `calcWeightProjection()` |
| 10053 | `fmtProjDate()` |
| 10064 | `suggestedWeeklyGoal()` |
| 10075 | `getWeeklyGoal()` |
| 10081 | `saveWeeklyGoal()` |
| 10098 | `sheetWeight()` |
| 10310 | `wtSheetRerender()` |
| 10320 | `wtHeroEdit()` |
| 10328 | `wtHeroCommit()` |
| 10357 | `setGoalTimeframe()` |
| 10364 | `wtTfCustomToggle()` |
| 10369 | `wtTfCustomCommit()` |
| 10382 | `logWeight()` |
| 10391 | `sheetProfile()` |
| 10454 | `saveProfile()` |
| 10493 | `buildGoalEngine()` |
| 10583 | `openDaySnapshot()` |
| 10595 | `sheetDaySnapshot()` |
| 10717 | `_isPastDayInCurrentWeek()` |
| 10735 | `openEditDay()` |
| 10747 | `rerenderEditDay()` |
| 10755 | `sheetEditDay()` |
| 10838 | `saveEditDay()` |
| 10888 | `deleteFastAt()` |
| 10898 | `editFastAt()` |
| 10936 | `saveFastEdit()` |
| 10981 | `deleteWorkoutAt()` |
| 10995 | `editWorkoutAt()` |
| 11025 | `saveWorkoutEdit()` |
| 11069 | `cascadeAfterEdit()` |
| 11085 | `toLocalISO()` |
| 11111 | `_normalizePlan()` |
| 11138 | `openPlanDay()` |
| 11153 | `_ensurePlan()` |
| 11167 | `sheetPlanDay()` |
| 11278 | `_refreshPlanSheet()` |
| 11288 | `setPlanFast()` |
| 11302 | `setPlanProto()` |
| 11310 | `addPlanPresetFromSelect()` |
| 11332 | `addPlanFreeformGoal()` |
| 11351 | `removePlanGoal()` |
| 11366 | `togglePlanGoalHit()` |
| 11379 | `clearPlanDay()` |
| 11392 | `selectPlanPreset()` |
| 11413 | `openAddFast()` |
| 11424 | `sheetAddFast()` |
| 11465 | `setAddFastType()` |
| 11473 | `setAddFastProto()` |
| 11484 | `saveAddFast()` |
| 11530 | `openAddWorkout()` |
| 11539 | `sheetAddWorkoutPick()` |
| 11564 | `pickAddWorkoutPreset()` |
| 11572 | `sheetAddWorkoutLog()` |
| 11605 | `saveAddWorkout()` |
| 11652 | `renderTodayPlanBanner()` |
| 11697 | `sheetCalendar()` |
| 11722 | `openEditGoalSingle()` |
| 11738 | `adjGoalSingle()` |
| 11742 | `saveGoalSingle()` |
| 11771 | `hbDefs()` |
| 11780 | `hbSaveDefs()` |
| 11781 | `hbLog()` |
| 11784 | `hbSaveLog()` |
| 11785 | `slLog()` |
| 11788 | `slSaveLog()` |
| 11789 | `hbToday()` |
| 11790 | `hbDoneToday()` |
| 11792 | `toggleHabit()` |
| 11804 | `hbLast30()` |
| 11812 | `habitStreak()` |
| 11824 | `updateHabitRing()` |
| 11840 | `renderHabitsCard()` |
| 11864 | `renderSleepPrompt()` |
| 11905 | `logSleep()` |
| 11910 | `dismissWind()` |
| 11917 | `openHabitsPage()` |
| 11921 | `hbShiftMonth()` |
| 11929 | `_plToday()` |
| 11930 | `plLoad()` |
| 11931 | `plSave()` |
| 11932 | `plDay()` |
| 11949 | `_plCommit()` |
| 11956 | `_plAddMin()` |
| 11961 | `_plShort()` |
| 11966 | `_plMer()` |
| 11967 | `_plRangeLbl()` |
| 11972 | `_plFmt()` |
| 11979 | `renderPlannerBarHTML()` |
| 12012 | `_plEsc()` |
| 12015 | `openPlanner()` |
| 12027 | `_plRefresh()` |
| 12033 | `_plGrow()` |
| 12034 | `_plGrowAll()` |
| 12036 | `_plSheetInner()` |
| 12090 | `_plSpine()` |
| 12132 | `plSetEndgame()` |
| 12134 | `plSetDump()` |
| 12135 | `plSetNotes()` |
| 12136 | `plSetPrio()` |
| 12137 | `plAddPrio()` |
| 12143 | `plDelPrio()` |
| 12148 | `plTogglePrio()` |
| 12149 | `plToggleTimeline()` |
| 12150 | `plSetStart()` |
| 12155 | `plSetDur()` |
| 12162 | `plAddBlock()` |
| 12171 | `plToggleBlock()` |
| 12172 | `plDelBlock()` |
| 12180 | `f30Get()` |
| 12184 | `f30Save()` |
| 12185 | `f30DayInfo()` |
| 12196 | `f30Start()` |
| 12201 | `f30OpenEditor()` |
| 12213 | `f30FieldSet()` |
| 12214 | `f30PointSet()` |
| 12215 | `f30PointAdd()` |
| 12224 | `f30HabitAdd()` |
| 12233 | `f30HabitRemove()` |
| 12237 | `f30HabitToggle()` |
| 12242 | `f30RefreshSheet()` |
| 12251 | `f30LengthSet()` |
| 12252 | `f30RefreshMeta()` |
| 12256 | `f30End()` |
| 12261 | `f30CardHTML()` |
| 12295 | `f30ShowedUp()` |
| 12308 | `f30RosterHTML()` |
| 12322 | `sheetFocus30()` |
| 12364 | `f30QuickChips()` |
| 12375 | `_esc()` |
| 12376 | `_escAttr()` |
| 12384 | `goalsRingOn()` |
| 12385 | `toggleGoalsRing()` |
| 12389 | `goalsRingHTML()` |
| 12420 | `renderHabitsPage()` |
| 12504 | `hbPill()` |
| 12568 | `toggleHabitTool()` |
| 12584 | `hbIconPicker()` |
| 12596 | `_hbStashDrafts()` |
| 12600 | `setHbIcon()` |
| 12601 | `addHabit()` |
| 12624 | `_prettyDay()` |
| 12630 | `toggleHabitOnDate()` |
| 12643 | `toggleMicroOnDate()` |
| 12654 | `openDayDetail()` |
| 12660 | `closeDayDetail()` |
| 12667 | `renderDayDetail()` |
| 12723 | `removeHabit()` |
| 12737 | `editHabit()` |
| 12760 | `wgDefs()` |
| 12765 | `wgSaveDefs()` |
| 12766 | `wgLog()` |
| 12767 | `wgSaveLog()` |
| 12768 | `wgWeekKey()` |
| 12772 | `wgProg()` |
| 12773 | `wgAdd()` |
| 12789 | `_wgStash()` |
| 12794 | `setWgIcon()` |
| 12795 | `setWgStep()` |
| 12797 | `renderWeeklyPanel()` |
| 12845 | `addWeeklyGoal()` |
| 12862 | `removeWeeklyGoal()` |
| 12878 | `mgDefs()` |
| 12883 | `mgSaveDefs()` |
| 12884 | `mgLog()` |
| 12885 | `mgSaveLog()` |
| 12886 | `mgToday()` |
| 12887 | `mgDoneToday()` |
| 12888 | `mgFmt()` |
| 12893 | `_mgStash()` |
| 12894 | `setMgTime()` |
| 12895 | `setMgIcon()` |
| 12897 | `renderMicroSection()` |
| 12930 | `addMicroGoal()` |
| 12943 | `removeMicroGoal()` |
| 12950 | `ensureMicroRunner()` |
| 12959 | `renderMicroRunner()` |
| 12990 | `updateMicroTime()` |
| 12995 | `startMicro()` |
| 13004 | `mgTick()` |
| 13027 | `mgKeepGoing()` |
| 13035 | `mgDone()` |
| 13047 | `mgStop()` |
| 13048 | `closeMicroRunner()` |
| 13055 | `initHabits()` |
