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

export default class Explanation extends Component {
  render() {
    const Senior = props => {
      const Caption = () => {
        if (props.item.image)
          return (
            <>
              <Image
                style={styles.seniorImage}
                source={{
                  uri: props.item.image,
                }}
                resizeMode={'contain'}
              />
              <Text style={styles.seniorText}>
                {props.item.caption.department}
              </Text>
              <Text style={styles.seniorText}>{props.item.caption.sine}</Text>
              <Text style={styles.seniorText}>{props.item.caption.name}</Text>
            </>
          );
      };
      if (props.flag) {
        return (
          <View style={styles.seniorBox}>
            <Caption item={props.item}></Caption>
          </View>
        );
      } else {
        return (
          <Image
            style={styles.contentImage}
            source={{
              uri: props.item.image,
            }}
            resizeMode={'contain'}
          />
        );
      }
    };
    const Recommend = props => {
      if (props.flag) {
        return (
          <Text style={styles.recommendSubTitle}>
            高校生のみなさまに是非ともイチオシしたい、{'\n'}
            この求人のポイントをご紹介していきます。
          </Text>
        );
      } else {
        return <></>;
      }
    };
    const ContentCreate = props => {
      subTitleStyle = styles.contentSubTitle;
      texteStyle = styles.contentText;
      if (!props.subTitle) subTitleStyle = undefined;
      if (!props.text) texteStyle = undefined;
      return (
        <>
          <Text style={subTitleStyle}>{props.subTitle}</Text>
          <Text style={texteStyle}> {props.text}</Text>
        </>
      );
    };
    return (
      <View>
        {this.props.data.content.map((content, index) => {
          return (
            <View key={index}>
              <Text style={styles.contentTitle}>{content.title}</Text>
              <Recommend flag={content.isRecommend}></Recommend>
              {content.contentList.map((item, index) => {
                return (
                  <View key={index}>
                    <Senior flag={content.isSenior} item={item}></Senior>
                    <ContentCreate
                      subTitle={item.subTitle}
                      text={item.text}></ContentCreate>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  contentTitle: {
    fontSize: 18,
    lineHeight: 30,
    marginHorizontal: 18,
    marginBottom: 20,
    color: 'black',
    borderBottomWidth: 7,
    borderBottomColor: 'yellow',
  },
  contentSubTitle: {
    marginHorizontal: 18,
    margin: 13,
    fontSize: 17,
    color: 'blue',
  },
  recommendSubTitle: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'blue',
  },
  contentText: {
    lineHeight: 25,
    marginBottom: 30,
    marginHorizontal: 18,
    fontSize: 16,
    color: 'black',
  },
  seniorBox: {
    alignItems: 'center',
  },
  seniorImage: {
    width: 160,
    height: 160,
    borderRadius: 150,
    overflow: 'hidden',
    backgroundColor: 'red',
  },
  seniorText: {
    color: 'black',
    fontSize: 17,
  },
  contentImage: {
    width: '100%',
    height: 270,
  },
});
