import { View, Text, ScrollView } from "react-native";
import React from "react";

const NotificationItem = ({
  date,
  time,
  message,
  description,
  isReceived,
}: {
  date: string;
  time: string;
  message: string;
  description: string;
  isReceived: boolean;
}) => {
  return (
    <View className="flex-row justify-between items-center p-4 mb-2 bg-white rounded-lg shadow-sm">
      <View>
        <Text className="text-gray-500">
          {date}, {time}
        </Text>
        <Text className="text-black">{message}</Text>
        <Text className="text-gray-400">{description}</Text>
        <View>
          {isReceived ? (
            <Text className="text-green-500">
              {/* ✔️ */}
              Received
            </Text>
          ) : (
            <Text className="text-red-500">
              {/* ❌ */}
              Spent
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

const Notifications = () => {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* <Text className="text-xl font-bold text-center text-blue-600 mb-4">Notifications</Text> */}
      <Text className="text-lg font-semibold text-gray-800 mb-2">New</Text>
      <NotificationItem
        date="29 June 2024"
        time="7:14 PM"
        message="You received Ksh 100.000 from Alexandr Gibson Jogja"
        description="Pay debt"
        isReceived={true}
      />
      <NotificationItem
        date="29 June 2024"
        time="9:02 AM"
        message="You spent Ksh 32.000 for Coffe Cetar back Tugu Sentral"
        description="Buy drink"
        isReceived={false}
      />

      <Text className="text-lg font-semibold text-gray-800 mt-6 mb-2">
        Recent
      </Text>
      <NotificationItem
        date="28 June 2024"
        time="8:32 PM"
        message="You spent Ksh 210.000 for pay Tokosblajo mera"
        description="Buy items"
        isReceived={false}
      />
      <NotificationItem
        date="29 June 2024"
        time="7:14 PM"
        message="You received Ksh 100.000 from Alexandr Gibson Jogja"
        description="Pay debt"
        isReceived={true}
      />
      <NotificationItem
        date="28 June 2024"
        time="8:32 PM"
        message="You spent Ksh 210.000 for pay Tokosblajo mera"
        description="Buy items"
        isReceived={false}
      />
    </ScrollView>
  );
};

export default Notifications;
