import * as Notifications from 'expo-notifications';
import {Tabs} from 'expo-router';
import {Text} from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () =>({
    shouldPlaySound:true,
    shouldSetBadge:false,
    shouldShowBanner:true,
    shouldShowList:true,
  }),
});

export default function TabLayout(){
  return(
    <Tabs screenOptions={{tabBarActiveTintColor:'#0EA5E9'}}>
      <Tabs.Screen
        name="index"
        options={{title:'Reminder',tabBarIcon:()=><Text>⏰</Text>}}
      />
    </Tabs>
  );
}