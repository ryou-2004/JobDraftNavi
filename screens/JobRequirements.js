import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import AboutData from '../json/AboutData.json';
const data = AboutData.jobRequirements;

const RequirementTitleList = [
  [
    '雇用形態',
    '募集職種',
    '仕事内容',
    '募集人数',
    '必要な知識または技能',
    '就業場所',
    '就業時間',
    '時間外労働',
    '休憩時間',
  ],
  [
    '給与',
    '賞与',
    '昇給',
    '手当・残業代',
    '既卒',
    '転勤',
    'シフト制',
    '寮・社宅',
    '退職金制度',
    '福利厚生',
    '年間休日',
    '育児休業実績',
    '介護休業実績',
  ],
  [
    '複数応募',
    '面接',
    '適性検査',
    '学科試験',
    '選考場所',
    '先行旅費',
    '合否連絡',
  ],
  ['備考'],
  ['日程', '会場', '企業からのメッセージ'],
];

export default class JobRequirements extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = section => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  };

  _renderContent = section => {
    const HellowWork = () => {
      return (
        <View style={styles.requirementBox}>
          <Text style={styles.requirementText}>求人票</Text>
          <Text>こちらのお仕事の求人票はこちら</Text>
          <TouchableOpacity>
            <Text>求人票をダウンロードする</Text>
          </TouchableOpacity>
          <Text>求人番号</Text>
          <View>
            {data.map((item, index) => {
              return <Text key={index}>{item}</Text>;
            })}
          </View>
          <Text>管轄ハローワーク</Text>
          <Text>{data.hellowWork}</Text>
        </View>
      );
    };
    return (
      <View style={styles.content}>
        {section.content.map((item, index) => {
          return (
            <View style={styles.requirementBox} key={index}>
              <Text style={styles.requirementText}>
                {RequirementTitleList[data.sections.indexOf(section)][index]}
              </Text>
              <Text style={styles.contentText}>{item}</Text>
            </View>
          );
          <HellowWork></HellowWork>;
        })}
      </View>
    );
  };

  _updateSections = activeSections => {
    this.setState({activeSections});
  };

  render() {
    return (
      <ScrollView>
        <Text style={styles.contentTitle}>求人票と同じ情報がこちら</Text>
        <View style={styles.accordion}>
          <Accordion
            sections={data.sections}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
          />
        </View>
        <View style={{marginBottom: 100}}></View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
  },
  contentTitle: {
    marginHorizontal: 18,
    marginTop: 30,
    marginBottom: 20,
    fontSize: 18,
    lineHeight: 30,
    color: 'black',
    borderBottomWidth: 7,
    borderBottomColor: 'yellow',
  },
  accordion: {
    marginHorizontal: 18,
  },
  header: {
    marginBottom: 5,
  },
  headerText: {
    padding: 20,
    fontSize: 18,
    color: 'white',
    backgroundColor: 'blue',
  },
  requirementBox: {
    padding: 20,
    borderWidth: 1,
    borderBottomColor: 'blue',
    borderLeftColor: 'blue',
    borderRightColor: 'blue',
    borderTopColor: 'rgba(0,0,0,0)',
  },
  requirementText: {
    marginBottom: 10,
    fontSize: 17,
    color: 'blue',
  },
  contentText: {
    lineHeight: 25,
    fontSize: 16,
    color: 'black',
  },
});
