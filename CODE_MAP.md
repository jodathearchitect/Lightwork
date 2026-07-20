# Lightwork Code Map

**Source:** `lightwork.html` · **Version:** Lightwork v0.9.31 · **Lines:** 13064

> Regenerate after edits with `npm run map` — line numbers drift.

## Major sections (JS banners)

| Line | Section |
|---|---|
| 3735 | ICON REGISTRY |
| 3776 | STATE |
| 3980 | Unified Stretch & Hold routine state |
| 4123 | ONBOARDING |
| 4236 | PERSISTENCE |
| 4713 | APP INIT |
| 4742 | TIME |
| 4793 | WEEK STRIP |
| 4840 | RING |
| 5094 | FAST CONTROLS |
| 5529 | MILESTONES |
| 5548 | ACHIEVEMENTS |
| 6523 | EARNED ENERGY ENGINE |
| 6754 | EXERCISE CARDS |
| 6850 | EXERCISE LIBRARY |
| 6926 | REST DAY |
| 6935 | SET TRIPPIN |
| 6968 | SET TRIPPIN' DAILY SYSTEM |
| 7930 | TABATA (standalone) |
| 7996 | WORKOUT HISTORY STRIP |
| 8065 | PRESETS |
| 8198 | WORKOUT PLAYER |
| 8201 | SOUND ENGINE |
| 8629 | STRETCH & HOLD — UNIFIED ROUTINE ENGINE |
| 8990 | SETS — INLINE MODULE |
| 9133 | Sets library picker sheet (mirrors stretch-library) |
| 9196 | STRETCH / MOBILITY LIBRARY |
| 9260 | NAVIGATION |
| 9276 | SHEETS |
| 9843 | Stretch library picker sheet |
| 11748 | START |

## Data tables (UPPERCASE consts)

| Line | Table |
|---|---|
| 3741 | `ICONS` |
| 3788 | `FAST_GUARDRAILS` |
| 3831 | `FAST_TYPES` |
| 3968 | `PLANK_VARIATIONS` |
| 3974 | `PLANK_GOALS` |
| 4010 | `FPS` |
| 4015 | `PHASES` |
| 4030 | `MILESTONES` |
| 4042 | `EX_CONFIG` |
| 4103 | `EX_CATEGORIES` |
| 4113 | `MOVE_LINES` |
| 4237 | `DB_KEY` |
| 4597 | `TWENTY_FOUR_HRS` |
| 4961 | `RING_PALETTE` |
| 4964 | `SVGNS` |
| 5131 | `FAST_START_MESSAGES` |
| 5199 | `FEEDING_GUIDE` |
| 5553 | `ACHIEVEMENTS` |
| 6044 | `EXERCISE_TIPS` |
| 6052 | `TL_MILESTONES` |
| 6524 | `BADGES` |
| 6534 | `FAST_TYPE_MULTIPLIERS` |
| 6548 | `EX_KCAL_PER_REP` |
| 6937 | `ST_EXERCISES` |
| 6957 | `ST_CATEGORIES` |
| 7465 | `ST_COMBO` |
| 7466 | `ST_COMBO_WINDOW` |
| 9197 | `STRETCH_MOVES` |
| 9235 | `STRETCH_CATS` |
| 9543 | `FAST_COMBO_CATS` |
| 9565 | `FAST_COMBOS` |
| 11765 | `HABIT_PRESETS` |
| 11929 | `PL_KEY` |
| 12180 | `F30_KEY` |
| 12384 | `GOALS_RING_STOPS` |
| 12582 | `HABIT_ICONS` |
| 12758 | `WEEKLY_SEED` |
| 12874 | `MICRO_SEED` |

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
| 3090 | `#aurora-bg` |
| 3097 | `#fastCompleteOverlay` |
| 3100 | `#fcoScroll` |
| 3104 | `#setTrippinScreen` |
| 3119 | `#stScoreNum` |
| 3123 | `#stScorePct` |
| 3124 | `#stScoreConq` |
| 3125 | `#stScoreDots` |
| 3128 | `#stArcFill` |
| 3130 | `#stDailyStrip` |
| 3134 | `#stScreenBody` |
| 3143 | `#stSheetOverlay` |
| 3144 | `#stSheet` |
| 3146 | `#stSheetContent` |
| 3152 | `#stCelebrate` |
| 3153 | `#stCelebContent` |
| 3157 | `#milestoneToast` |
| 3158 | `#toastTitle` |
| 3159 | `#toastBody` |
| 3163 | `#onboarding` |
| 3164 | `#obProgress` |
| 3167 | `#ob0` |
| 3181 | `#ob1` |
| 3191 | `#ob2` |
| 3232 | `#ob3` |
| 3235 | `#obGoalOpts` |
| 3246 | `#ob4` |
| 3249 | `#obActOpts` |
| 3260 | `#ob5` |
| 3263 | `#obDietOpts` |
| 3276 | `#ob6` |
| 3280 | `#obProtoOpts` |
| 3287 | `#obExChips` |
| 3301 | `#ob7` |
| 3306 | `#sumCal` |
| 3307 | `#sumFast` |
| 3308 | `#sumTDEE` |
| 3309 | `#sumEx` |
| 3313 | `#sumProt` |
| 3314 | `#sumCarbs` |
| 3315 | `#sumFats` |
| 3323 | `#main-app` |
| 3326 | `#page-today` |
| 3335 | `#weekStrip` |
| 3340 | `#coachLine` |
| 3342 | `#fastSetupBadge` |
| 3353 | `#ringContainer` |
| 3354 | `#ringAmbient` |
| 3355 | `#ringHalo` |
| 3357 | `#ringFireGlow` |
| 3358 | `#ringEmbers` |
| 3360 | `#ringFeedingGlow` |
| 3443 | `#ringCenter` |
| 3448 | `#ringActions` |
| 3455 | `#todayPlanBanner` |
| 3460 | `#sleepPromptCard` |
| 3463 | `#insightCard` |
| 3466 | `#weeklyProjectionCard` |
| 3470 | `#earnedCard` |
| 3476 | `#page-habits` |
| 3484 | `#habitsTabBody` |
| 3488 | `#page-move` |
| 3495 | `#moveCoach` |
| 3503 | `#restDayBanner` |
| 3513 | `#moveActiveContent` |
| 3517 | `#moveToolPills` |
| 3539 | `#moveToolPanels` |
| 3541 | `#panel-sets` |
| 3542 | `#setsCard` |
| 3545 | `#panel-tabata` |
| 3551 | `#tabataPhase` |
| 3552 | `#tabataCount` |
| 3553 | `#tabataInfo` |
| 3554 | `#tabataBar` |
| 3562 | `#panel-stretch` |
| 3563 | `#plankCard` |
| 3574 | `#presetCards` |
| 3582 | `#workoutPlayer` |
| 3598 | `#wpReadyScreen` |
| 3599 | `#wpReadyName` |
| 3600 | `#wpReadyEx` |
| 3601 | `#wpReadyMeta` |
| 3618 | `#wpRoundInfo` |
| 3620 | `#wpExName` |
| 3622 | `#wpPhase` |
| 3624 | `#wpCount` |
| 3627 | `#wpBar` |
| 3630 | `#wpSetDots` |
| 3632 | `#wpAddReps` |
| 3634 | `#wpRepBtns` |
| 3637 | `#wpUpNext` |
| 3667 | `#workoutComplete` |
| 3679 | `#wcSummary` |
| 3680 | `#wcStats` |
| 3681 | `#wcBadges` |
| 3696 | `#bottomBar` |
| 3706 | `#tab-today` |
| 3710 | `#tab-habits` |
| 3714 | `#tab-move` |
| 3723 | `#sheet-overlay` |
| 3724 | `#sheet-content` |
| 3730 | `#day-detail-overlay` |
| 3731 | `#day-detail-content` |
| 5357 | `#feedTimerLine` |
| 5893 | `#achPageBody` |
| 6779 | `#rem-${key}` |
| 6781 | `#prog-${key}` |
| 6784 | `#done-${key}` |
| 7420 | `#setsEgVal` |
| 7514 | `#stCard'+exIdx+'` |
| 7517 | `#stBestWrap'+exIdx+'` |
| 7527 | `#stSub'+exIdx+'` |
| 7539 | `#stCount'+exIdx+'` |
| 7541 | `#stCombo'+exIdx+'` |
| 7543 | `#stPct'+exIdx+'` |
| 7548 | `#stBar'+exIdx+'` |
| 7549 | `#stBarExtra'+exIdx+'` |
| 7865 | `#stCelebStat` |
| 8156 | `#epChips` |
| 8158 | `#epRounds` |
| 8161 | `#epWork` |
| 8164 | `#epRest` |
| 8332 | `#sliderDisplay` |
| 8902 | `#plankTimer` |
| 8934 | `#plankTimer` |
| 8942 | `#plankTimer` |
| 8943 | `#plankBar` |
| 8944 | `#stretchCue` |
| 9009 | `#setsTotalBadge` |
| 9049 | `#stCard'+exIdx+'` |
| 9052 | `#stBestWrap'+exIdx+'` |
| 9057 | `#stSub'+exIdx+'` |
| 9069 | `#stCombo'+exIdx+'` |
| 9071 | `#stPct'+exIdx+'` |
| 9076 | `#stBar'+exIdx+'` |
| 9077 | `#stBarExtra'+exIdx+'` |
| 9145 | `#setsLibCatRow` |
| 9146 | `#setsLibGrid` |
| 9464 | `#estDisplayDate` |
| 9465 | `#estDisplayTime` |
| 9780 | `#goal-${k}` |
| 9809 | `#tcWork` |
| 9817 | `#tcRest` |
| 9825 | `#tcRounds` |
| 9848 | `#libCatRow` |
| 9849 | `#libGrid` |
| 9919 | `#waterDots` |
| 10446 | `#profileSaved` |
| 10520 | `#goalEngineWrap` |
| 11732 | `#gs-${key}` |
| 12021 | `#plSheet` |
| 12337 | `#f30SheetBadge` |
| 12551 | `#plBarSlot` |
| 12966 | `#mgTimerText` |
| 12984 | `#mgTimerText` |

## Functions (435)

| Line | Function |
|---|---|
| 3763 | `ico()` |
| 3798 | `getGuardrailLevel()` |
| 3810 | `checkFastGuardrails()` |
| 4125 | `buildObProgress()` |
| 4134 | `showOBSlide()` |
| 4140 | `nextOB()` |
| 4162 | `prevOB()` |
| 4163 | `selectOpt()` |
| 4170 | `selectProto()` |
| 4175 | `toggleChip()` |
| 4180 | `calcTDEE()` |
| 4193 | `getMacros()` |
| 4198 | `buildSummary()` |
| 4214 | `finishOB()` |
| 4229 | `quickStart()` |
| 4239 | `archiveDay()` |
| 4329 | `archiveTodayWithTabata()` |
| 4355 | `prefsAvailable()` |
| 4358 | `writeMirror()` |
| 4368 | `readAsync()` |
| 4379 | `readSync()` |
| 4386 | `saveState()` |
| 4428 | `loadState()` |
| 4438 | `loadStateAsync()` |
| 4446 | `_applyLoadedState()` |
| 4623 | `saveNow()` |
| 4628 | `startAutoSave()` |
| 4714 | `initApp()` |
| 4743 | `updateStatusTime()` |
| 4748 | `updateTimeOfDay()` |
| 4753 | `tickSecond()` |
| 4794 | `buildWeekStrip()` |
| 4841 | `buildTickMarks()` |
| 4856 | `updateRingIdle()` |
| 4886 | `getGoalEndTime()` |
| 4901 | `applyFireTier()` |
| 4944 | `resetFireTier()` |
| 4962 | `_hexA()` |
| 4963 | `setRingSpectrum()` |
| 4997 | `updateRingActive()` |
| 5060 | `updateCoachByPhase()` |
| 5095 | `startFast()` |
| 5142 | `showFastStartToast()` |
| 5149 | `endFast()` |
| 5238 | `getFeedingGuide()` |
| 5243 | `getFeedingWindowSec()` |
| 5248 | `fmtFeedDuration()` |
| 5256 | `enterFeedingWindow()` |
| 5307 | `updateRingFeeding()` |
| 5341 | `renderFeedingPanel()` |
| 5399 | `endFeedingWindow()` |
| 5427 | `buildFCOHTML()` |
| 5459 | `showFastComplete()` |
| 5511 | `closeFastComplete()` |
| 5517 | `shareFastSummary()` |
| 5530 | `checkMilestones()` |
| 5540 | `showMilestoneToast()` |
| 5605 | `achGet()` |
| 5610 | `achStore()` |
| 5616 | `achIsUnlocked()` |
| 5622 | `achUnlock()` |
| 5644 | `achCheckFasting()` |
| 5652 | `achCheckDailyReps()` |
| 5667 | `achCheckSession()` |
| 5685 | `achGetActivityDates()` |
| 5700 | `achComputeStreak()` |
| 5717 | `achCheckStreak()` |
| 5729 | `achCheckDuration()` |
| 5744 | `achListDurationEarned()` |
| 5752 | `achCheckAll()` |
| 5759 | `achComputeStats()` |
| 5826 | `achShowToast()` |
| 5832 | `achShowCinematic()` |
| 5866 | `achCloseCinematic()` |
| 5873 | `openAchievementsPage()` |
| 5880 | `closeAchievementsPage()` |
| 5886 | `buildAchievementsPage()` |
| 5901 | `renderAchievementsPage()` |
| 5921 | `progressFor()` |
| 6064 | `getNextMilestone()` |
| 6070 | `getCurrentPhaseData()` |
| 6075 | `getExTip()` |
| 6078 | `fmtCountdown()` |
| 6096 | `renderWeeklyProjectionCard()` |
| 6108 | `buildWeeklyProjectionCard()` |
| 6360 | `renderInsightCard()` |
| 6411 | `_buildInsightCardDOM()` |
| 6518 | `updateActivityCard()` |
| 6563 | `buildEarnedGoalBar()` |
| 6627 | `burnPerHour()` |
| 6635 | `calcEarnedKcal()` |
| 6669 | `getBadge()` |
| 6675 | `renderEarnedCard()` |
| 6755 | `buildExCards()` |
| 6770 | `buildExCardHTML()` |
| 6787 | `logReps()` |
| 6798 | `updateExCard()` |
| 6823 | `resetEx()` |
| 6835 | `updateMoveSummary()` |
| 6839 | `updateMoveCoach()` |
| 6845 | `updateVolumeBadge()` |
| 6854 | `buildExerciseLibrary()` |
| 6859 | `buildLibCategoryBar()` |
| 6875 | `buildLibChips()` |
| 6898 | `buildFocusSelected()` |
| 6914 | `removeFocus()` |
| 6919 | `addFocusToNewPreset()` |
| 6928 | `toggleRestDay()` |
| 6971 | `stTodayKey()` |
| 6976 | `stYesterdayKey()` |
| 6983 | `stCheckDailyReset()` |
| 7018 | `stCloseOutDay()` |
| 7052 | `stGetTodayTotal()` |
| 7059 | `stGetYesterdayTotal()` |
| 7067 | `stGetBestDay()` |
| 7075 | `stRenderDailyStrip()` |
| 7126 | `stOpenSettings()` |
| 7152 | `stSettingsAdj()` |
| 7159 | `stSettingsSave()` |
| 7178 | `stRenderDailyCard()` |
| 7233 | `toggleMoveTool()` |
| 7263 | `buildSetTrippin()` |
| 7294 | `stOpen()` |
| 7306 | `stClose()` |
| 7313 | `stAddExercise()` |
| 7325 | `stRemoveExercise()` |
| 7336 | `stOpenSheet()` |
| 7340 | `stCloseSheet()` |
| 7345 | `stPickExercise()` |
| 7374 | `stAddFromPicker()` |
| 7382 | `stEditGoal()` |
| 7411 | `sheetSetsEditGoal()` |
| 7428 | `setsEgAdj()` |
| 7435 | `setsEgSave()` |
| 7444 | `stEgAdj()` |
| 7451 | `stEgSave()` |
| 7469 | `stTier()` |
| 7476 | `stRenderScreen()` |
| 7574 | `stUpdateHero()` |
| 7622 | `stUpdateDisplay()` |
| 7693 | `stShowCombo()` |
| 7704 | `stAddReps()` |
| 7754 | `stFinish()` |
| 7837 | `stShowCelebration()` |
| 7920 | `stCloseCelebration()` |
| 7931 | `toggleTabata()` |
| 7946 | `tabataTick()` |
| 7974 | `resetTabata()` |
| 7981 | `updateTabataDisplay()` |
| 8008 | `buildWorkoutHistoryStrip()` |
| 8080 | `buildPresetCards()` |
| 8115 | `setActivePreset()` |
| 8119 | `deletePreset()` |
| 8124 | `openEditPreset()` |
| 8128 | `openSheetWithData()` |
| 8141 | `buildEditPresetSheet()` |
| 8170 | `adjEP()` |
| 8177 | `savePreset()` |
| 8204 | `getAudioCtx()` |
| 8215 | `playTone()` |
| 8233 | `playWorkStart()` |
| 8241 | `playClick()` |
| 8249 | `playRestStart()` |
| 8256 | `playRestWarning()` |
| 8262 | `playWhistle()` |
| 8290 | `launchPreset()` |
| 8307 | `beginWP()` |
| 8321 | `buildRepSlider()` |
| 8327 | `render()` |
| 8387 | `renderPlayerUI()` |
| 8452 | `getNextWPEx()` |
| 8458 | `addWPReps()` |
| 8469 | `startWP()` |
| 8474 | `toggleWorkoutPlayer()` |
| 8486 | `wpTick()` |
| 8500 | `advanceWP()` |
| 8531 | `endWorkoutPlayer()` |
| 8548 | `showWorkoutComplete()` |
| 8611 | `closeWorkoutComplete()` |
| 8634 | `stretchFmt()` |
| 8640 | `stretchEntrySec()` |
| 8645 | `stretchRoutineTotal()` |
| 8653 | `stretchAddMove()` |
| 8659 | `stretchRemoveAt()` |
| 8664 | `stretchClearRoutine()` |
| 8671 | `stretchChipPressStart()` |
| 8678 | `stretchChipPressEnd()` |
| 8686 | `stretchPromptCustomTime()` |
| 8701 | `setStretchDefault()` |
| 8708 | `toggleStretchRoutine()` |
| 8729 | `stretchTick()` |
| 8776 | `stretchFinishRoutine()` |
| 8796 | `stretchStopRoutine()` |
| 8805 | `stretchSkipMove()` |
| 8825 | `stretchResetRoutine()` |
| 8836 | `stretchSessions()` |
| 8842 | `renderStretchModule()` |
| 8966 | `updateStretchTimerUI()` |
| 8987 | `renderPlankCard()` |
| 8995 | `renderSetsModule()` |
| 9105 | `setsRefreshTotal()` |
| 9118 | `stFinishInline()` |
| 9126 | `setsClearSession()` |
| 9135 | `sheetSetsLibrary()` |
| 9152 | `renderSetsLibCats()` |
| 9159 | `setsLibSelCat()` |
| 9164 | `renderSetsLibGrid()` |
| 9184 | `setsLibAdd()` |
| 9247 | `stretchMoveByKey()` |
| 9250 | `stretchUsage()` |
| 9254 | `bumpStretchUsage()` |
| 9261 | `switchTab()` |
| 9272 | `scrollToRing()` |
| 9278 | `openSheet()` |
| 9290 | `_injectSheetClose()` |
| 9312 | `closeSheet()` |
| 9318 | `closeSheetOverlay()` |
| 9321 | `buildSheet()` |
| 9344 | `sheetLogMeal()` |
| 9357 | `logMeal()` |
| 9365 | `sheetEndFast()` |
| 9420 | `sheetEndFeeding()` |
| 9447 | `sheetEditStartTime()` |
| 9503 | `adjStartTime()` |
| 9521 | `applyEditStartTime()` |
| 9567 | `sheetChangeProto()` |
| 9652 | `fsSheetRerender()` |
| 9661 | `fsCustomDurToggle()` |
| 9666 | `applyFastCombo()` |
| 9675 | `updateFastSetupBadge()` |
| 9684 | `changeProto()` |
| 9696 | `setCustomProtoHours()` |
| 9709 | `selectFastType()` |
| 9717 | `saveCustomAllowance()` |
| 9723 | `sheetFastHistory()` |
| 9743 | `_wireFastHistoryLongPress()` |
| 9773 | `sheetEditGoals()` |
| 9789 | `adjGoal()` |
| 9796 | `saveGoals()` |
| 9801 | `sheetTabataConfig()` |
| 9832 | `adjTab()` |
| 9838 | `saveTabata()` |
| 9844 | `sheetStretchLibrary()` |
| 9857 | `renderLibCats()` |
| 9865 | `libSelCat()` |
| 9871 | `renderLibGrid()` |
| 9899 | `libAdd()` |
| 9913 | `sheetWater()` |
| 9923 | `logWater()` |
| 9943 | `getRollingAvgBurn()` |
| 9969 | `getStartingWeight()` |
| 9981 | `calcWeightProjection()` |
| 10054 | `fmtProjDate()` |
| 10065 | `suggestedWeeklyGoal()` |
| 10076 | `getWeeklyGoal()` |
| 10082 | `saveWeeklyGoal()` |
| 10099 | `sheetWeight()` |
| 10311 | `wtSheetRerender()` |
| 10321 | `wtHeroEdit()` |
| 10329 | `wtHeroCommit()` |
| 10358 | `setGoalTimeframe()` |
| 10365 | `wtTfCustomToggle()` |
| 10370 | `wtTfCustomCommit()` |
| 10383 | `logWeight()` |
| 10392 | `sheetProfile()` |
| 10455 | `saveProfile()` |
| 10494 | `buildGoalEngine()` |
| 10584 | `openDaySnapshot()` |
| 10596 | `sheetDaySnapshot()` |
| 10718 | `_isPastDayInCurrentWeek()` |
| 10736 | `openEditDay()` |
| 10748 | `rerenderEditDay()` |
| 10756 | `sheetEditDay()` |
| 10839 | `saveEditDay()` |
| 10889 | `deleteFastAt()` |
| 10899 | `editFastAt()` |
| 10937 | `saveFastEdit()` |
| 10982 | `deleteWorkoutAt()` |
| 10996 | `editWorkoutAt()` |
| 11026 | `saveWorkoutEdit()` |
| 11070 | `cascadeAfterEdit()` |
| 11086 | `toLocalISO()` |
| 11112 | `_normalizePlan()` |
| 11139 | `openPlanDay()` |
| 11154 | `_ensurePlan()` |
| 11168 | `sheetPlanDay()` |
| 11279 | `_refreshPlanSheet()` |
| 11289 | `setPlanFast()` |
| 11303 | `setPlanProto()` |
| 11311 | `addPlanPresetFromSelect()` |
| 11333 | `addPlanFreeformGoal()` |
| 11352 | `removePlanGoal()` |
| 11367 | `togglePlanGoalHit()` |
| 11380 | `clearPlanDay()` |
| 11393 | `selectPlanPreset()` |
| 11414 | `openAddFast()` |
| 11425 | `sheetAddFast()` |
| 11466 | `setAddFastType()` |
| 11474 | `setAddFastProto()` |
| 11485 | `saveAddFast()` |
| 11531 | `openAddWorkout()` |
| 11540 | `sheetAddWorkoutPick()` |
| 11565 | `pickAddWorkoutPreset()` |
| 11573 | `sheetAddWorkoutLog()` |
| 11606 | `saveAddWorkout()` |
| 11653 | `renderTodayPlanBanner()` |
| 11698 | `sheetCalendar()` |
| 11723 | `openEditGoalSingle()` |
| 11739 | `adjGoalSingle()` |
| 11743 | `saveGoalSingle()` |
| 11772 | `hbDefs()` |
| 11781 | `hbSaveDefs()` |
| 11782 | `hbLog()` |
| 11785 | `hbSaveLog()` |
| 11786 | `slLog()` |
| 11789 | `slSaveLog()` |
| 11790 | `hbToday()` |
| 11791 | `hbDoneToday()` |
| 11793 | `toggleHabit()` |
| 11805 | `hbLast30()` |
| 11813 | `habitStreak()` |
| 11825 | `updateHabitRing()` |
| 11841 | `renderHabitsCard()` |
| 11865 | `renderSleepPrompt()` |
| 11906 | `logSleep()` |
| 11911 | `dismissWind()` |
| 11918 | `openHabitsPage()` |
| 11922 | `hbShiftMonth()` |
| 11930 | `_plToday()` |
| 11931 | `plLoad()` |
| 11932 | `plSave()` |
| 11933 | `plDay()` |
| 11950 | `_plCommit()` |
| 11957 | `_plAddMin()` |
| 11962 | `_plShort()` |
| 11967 | `_plMer()` |
| 11968 | `_plRangeLbl()` |
| 11973 | `_plFmt()` |
| 11980 | `renderPlannerBarHTML()` |
| 12013 | `_plEsc()` |
| 12016 | `openPlanner()` |
| 12028 | `_plRefresh()` |
| 12034 | `_plGrow()` |
| 12035 | `_plGrowAll()` |
| 12037 | `_plSheetInner()` |
| 12091 | `_plSpine()` |
| 12133 | `plSetEndgame()` |
| 12135 | `plSetDump()` |
| 12136 | `plSetNotes()` |
| 12137 | `plSetPrio()` |
| 12138 | `plAddPrio()` |
| 12144 | `plDelPrio()` |
| 12149 | `plTogglePrio()` |
| 12150 | `plToggleTimeline()` |
| 12151 | `plSetStart()` |
| 12156 | `plSetDur()` |
| 12163 | `plAddBlock()` |
| 12172 | `plToggleBlock()` |
| 12173 | `plDelBlock()` |
| 12181 | `f30Get()` |
| 12185 | `f30Save()` |
| 12186 | `f30DayInfo()` |
| 12197 | `f30Start()` |
| 12202 | `f30OpenEditor()` |
| 12214 | `f30FieldSet()` |
| 12215 | `f30PointSet()` |
| 12216 | `f30PointAdd()` |
| 12225 | `f30HabitAdd()` |
| 12234 | `f30HabitRemove()` |
| 12238 | `f30HabitToggle()` |
| 12243 | `f30RefreshSheet()` |
| 12252 | `f30LengthSet()` |
| 12253 | `f30RefreshMeta()` |
| 12257 | `f30End()` |
| 12262 | `f30CardHTML()` |
| 12296 | `f30ShowedUp()` |
| 12309 | `f30RosterHTML()` |
| 12323 | `sheetFocus30()` |
| 12365 | `f30QuickChips()` |
| 12376 | `_esc()` |
| 12377 | `_escAttr()` |
| 12385 | `goalsRingOn()` |
| 12386 | `toggleGoalsRing()` |
| 12390 | `goalsRingHTML()` |
| 12421 | `renderHabitsPage()` |
| 12505 | `hbPill()` |
| 12569 | `toggleHabitTool()` |
| 12585 | `hbIconPicker()` |
| 12597 | `_hbStashDrafts()` |
| 12601 | `setHbIcon()` |
| 12602 | `addHabit()` |
| 12625 | `_prettyDay()` |
| 12631 | `toggleHabitOnDate()` |
| 12644 | `toggleMicroOnDate()` |
| 12655 | `openDayDetail()` |
| 12661 | `closeDayDetail()` |
| 12668 | `renderDayDetail()` |
| 12724 | `removeHabit()` |
| 12738 | `editHabit()` |
| 12761 | `wgDefs()` |
| 12766 | `wgSaveDefs()` |
| 12767 | `wgLog()` |
| 12768 | `wgSaveLog()` |
| 12769 | `wgWeekKey()` |
| 12773 | `wgProg()` |
| 12774 | `wgAdd()` |
| 12790 | `_wgStash()` |
| 12795 | `setWgIcon()` |
| 12796 | `setWgStep()` |
| 12798 | `renderWeeklyPanel()` |
| 12846 | `addWeeklyGoal()` |
| 12863 | `removeWeeklyGoal()` |
| 12879 | `mgDefs()` |
| 12884 | `mgSaveDefs()` |
| 12885 | `mgLog()` |
| 12886 | `mgSaveLog()` |
| 12887 | `mgToday()` |
| 12888 | `mgDoneToday()` |
| 12889 | `mgFmt()` |
| 12894 | `_mgStash()` |
| 12895 | `setMgTime()` |
| 12896 | `setMgIcon()` |
| 12898 | `renderMicroSection()` |
| 12931 | `addMicroGoal()` |
| 12944 | `removeMicroGoal()` |
| 12951 | `ensureMicroRunner()` |
| 12960 | `renderMicroRunner()` |
| 12991 | `updateMicroTime()` |
| 12996 | `startMicro()` |
| 13005 | `mgTick()` |
| 13028 | `mgKeepGoing()` |
| 13036 | `mgDone()` |
| 13048 | `mgStop()` |
| 13049 | `closeMicroRunner()` |
| 13056 | `initHabits()` |
