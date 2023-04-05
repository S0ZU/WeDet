//import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutUs = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>
        Welcome to our mobile app! We are a team of developers who are passionate about creating
        innovative and user-friendly apps that make your life easier.
      </Text>
      <Text style={styles.text}>
        Our mobile app is built using React Native, a popular open-source framework for building
        mobile applications that offers a high-quality user experience across different platforms.
      </Text>
      <Text style={styles.text}>
        Our goal is to provide you with a reliable and efficient mobile app that meets your needs.
        We are continuously working on improving our app by adding new features, fixing bugs, and
        enhancing the overall user experience.
      </Text>
      <Text style={styles.text}>
        At our company, we value your privacy and security. We take all necessary measures to
        protect your personal information and ensure that your data is safe and secure.
      </Text>
      <Text style={styles.text}>
        We are committed to providing excellent customer service and support. If you have any
        questions or feedback, please do not hesitate to contact us. Our team is always here to
        assist you and help you make the most out of our app.
      </Text>
      <Text style={styles.text}>
        Thank you for choosing our mobile app! We hope you enjoy using it as much as we enjoyed creating it.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',
  },
});

export default AboutUs;
