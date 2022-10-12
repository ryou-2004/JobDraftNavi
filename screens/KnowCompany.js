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
import Explanation from './Explanation';

import AboutData from '../json/AboutData.json';
const data = AboutData.knowCompany;

const campanyName = '株式会社ジンジブ';
const aboutList = [
  '大阪府大阪市中央区安土町2-3-13 大阪国際ビル14階',
  '2015年',
  '佐々木　満秀',
];
const aboutTitleList = ['住所', '設立年', '代表者'];
const address = '大阪府大阪市中央区安土町2-3-13 大阪国際ビル14階';
const established = '2015';
const president = '佐々木　満秀';

export default function KnowCompany() {
  return (
    <ScrollView>
      <Explanation data={data} />
      <Text style={styles.companyName}>{campanyName}</Text>
      {aboutTitleList.map((item, index) => {
        return (
          <View style={styles.contentBox} key={index}>
            <Text style={styles.title}>{item}</Text>
            <Text style={styles.info}>{aboutList[index]}</Text>
          </View>
        );
      })}
      <TouchableOpacity style={styles.goHomePage}>
        <Text style={styles.goHomePageText}>この会社のHPを見る</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  companyName: {
    marginBottom: 20,
    marginHorizontal: 18,
    fontSize: 17,
    color: 'black',
  },
  contentBox: {
    marginHorizontal: 18,
    marginBottom: 3,
    flexDirection: 'row',
  },
  title: {
    padding: 15,
    fontSize: 15,
    marginRight: 1,
    flex: 1,
    color: 'white',
    backgroundColor: 'blue',
  },
  info: {
    padding: 15,
    fontSize: 15,
    marginLeft: 1,
    flex: 1,
    color: 'black',
    backgroundColor: 'gray',
  },
  goHomePage: {
    marginHorizontal: 18,
    marginTop: 50,
    marginBottom: 230,
    padding: 15,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    overflow: 'hidden',
  },
  goHomePageText: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
