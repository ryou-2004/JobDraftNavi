import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import AboutData from '../json/AboutData.json';
import Explanation from './Explanation';

const data = AboutData.knowJob;

export default function KnowJob() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topImageBox}>
          <Swiper dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
            {data.imageList.map((item, index) => {
              return (
                <Image
                  key={index}
                  source={{
                    uri: item,
                  }}
                  style={styles.topImage}
                  resizeMode={'contain'}
                />
              );
            })}
          </Swiper>
        </View>
        <View>
          <Explanation data={data} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 100,
  },
  topImageBox: {
    height: 340,
    flexDirection: 'column',
    marginBottom: 30,
  },
  dot: {
    width: 35,
    height: 5,
  },
  activeDot: {
    width: 35,
    height: 5,
    backgroundColor: 'black',
  },
  topImage: {
    width: '100%',
    height: 30,
    top: 0,
    flex: 1,
  },
});
