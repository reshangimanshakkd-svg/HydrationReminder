import * as Notifications from 'expo-notifications';
import { useEffect,useState } from 'react';
import {Alert,Button,StyleSheet,Text,TextInput,View} from 'react-native';

export default function ReminderTab(){
  const [isReminding,setIsReminding] = useState(false);
  const [message,setMessage] = useState("Time to drink a glass of water!");
  const [intervalMinutes, setIntervalMinutes] = useState(1);

  useEffect(()=>{
    async function requestPermissions() {
      const {status} = await Notifications.requestPermissionsAsync();
      if (status != 'granted'){
        Alert.alert(
          'Permission required',
          'We need notifications to remind you to drink water!'
        );
      }
    }
    requestPermissions();
  },[]);

  async function scheduleReminder(){
    await Notifications.requestPermissionsAsync();

    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content:{
        title: "💧 Hydration Alert",
        body: message,
        sound:true,
      },

      trigger:{
        type:Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds:intervalMinutes*60,
        repeats:true
      },
    });

    setIsReminding(true);
    Alert.alert("Set!",'Reminding you every ${intervalMinutes} minutes.');
  }

  async function stopReminder() {
    await Notifications.cancelAllScheduledNotificationsAsync();
    setIsReminding(false);
    Alert.alert("Stopped","Reminders cancelled.");
    
  }

  return(
    <View style={styles.container}>
      <Text style={styles.emoji}>🥤</Text>
    </View>
  )
}


const styles = StyleSheet.create({

})