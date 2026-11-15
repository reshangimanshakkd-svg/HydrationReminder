# HydrationReminder

This app demonstrates how to implement **Local Notifications** (`expo-notifications`) and **Bottom Tab Navigation** (`expo-router`) in React Native and Expo.

## Features

- **Reminder Tab (`app/index.tsx`)**:
  - Requests OS-level notification permissions on startup.
  - Allows users to set a custom reminder message and repeating time interval (in minutes).
  - Schedules repeating local notifications that trigger even when the app is in the foreground.
  - Provides controls to start or cancel active reminders with real-time status indicators.
- **Tips Tab (`app/tips.tsx`)**: Displays key health benefits of staying hydrated.
- **About Tab (`app/about.tsx`)**: Displays application information and developer credits.

## Tech Stack

- React Native
- Expo / Expo Router
- `expo-notifications`

## Setup & Running the App

1. Install dependencies:
   ```bash
   npx expo install expo-notifications
   ```
