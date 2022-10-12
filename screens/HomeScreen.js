import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ImageBackground,
  Touchable,
} from 'react-native';
import {panGestureHandlerCustomNativeProps} from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Swiper from 'react-native-swiper';

export let num = 0;
const images = [
  'https://job-draft.com/images/top/carousel/fes2022-report-banner.png',
  'https://job-draft.com/images/top/carousel/app-new-banner-01.png',
  'https://job-draft.com/images/top/carousel/your-job-banner.jpg',
  'https://job-draft.com/images/top/carousel/online_shukatu.png',
  'https://job-draft.com/images/top/carousel/shukatu_ouen.png',
];

const topics = [
  {
    uri: 'https://job-draft.com/topics/102',
    text: '【高卒就職】採用担当者が不採用にする３つの理由と対策',
  },
  {
    uri: 'https://job-draft.com/topics/87',
    text: '社会人デビュー前に知っておきたい！正しい敬語の使い方',
  },
  {
    uri: 'https://job-draft.com/topics/67',
    text: '【高校生進路】高卒就職と大学進学、必要なお金を比較してみた',
  },
];
const links = [
  {uri: '', text: 'ジョブドラフトとは'},
  {uri: '', text: '就活情報'},
  {uri: '', text: 'ご利用の流れ'},
];
const contentsList = [
  {
    screen: '',
    uri: 'https://job-draft.com/images/top/banner-202010line-sp.png',
  },
  {
    screen: '',
    uri: 'https://job-draft.com/images/top/banner-202012line-sp.png',
  },
  {screen: '', uri: 'https://job-draft.com/images/top/banner-question-sp.png'},
  {screen: '', uri: 'https://job-draft.com/images/top/banner-fes2022-sp.jpg'},
  {
    screen: '',
    uri: 'https://job-draft.com/images/top/banner-guide-book-sp.png',
  },
];
const bannerImage = [
  {screen: '', uri: 'https://job-draft.com/images/top/banner-202101.png'},
  {screen: '', uri: 'https://job-draft.com/images/top/banner-202102.png'},
  {screen: '', uri: 'https://job-draft.com/images/top/banner-202103.png'},
  {screen: '', uri: 'https://job-draft.com/images/top/banner-202104.png'},
];

export default function HomeScreen({navigation}) {
  //setInterval(hoge, 1000);
  const onPressButton = () => {
    navigation.navigate('求人検索');
  };
  function Dot(props) {
    return (
      <View
        style={{
          backgroundColor: props.color,
          width: 40,
          height: 8,
          borderRadius: 4,
          marginLeft: 3,
          marginRight: 3,
          marginTop: 3,
          marginBottom: 3,
        }}
      />
    );
  }
  return (
    <ImageBackground
      source={{
        uri: 'https://job-draft.com/images/top/ilustration-top-sp-bg.png',
      }}
      style={mainStyle.backImage}>
      <ImageBackground
        source={{
          uri: 'https://job-draft.com/images/top/ilustration-top-sp.png',
        }}
        resizeMode="cover"
        style={mainStyle.backIlust}></ImageBackground>
      <ScrollView style={styles.backColor}>
        <View style={mainStyle.multiCarouselBox}>
          <Swiper
            autoplay={true}
            style={mainStyle.multiCarsouslSwiper}
            dot={<Dot color={'rgba(0,0,0,.2)'}></Dot>}
            activeDot={<Dot color={'#007aff'}></Dot>}>
            {images.map(url => {
              return (
                <Image
                  style={mainStyle.multiCarousel}
                  source={{uri: url}}
                  resizeMode="contain"
                  key={{url}}
                />
              );
            })}
          </Swiper>
        </View>
        <View style={mainStyle.mainVisual}>
          <View style={mainStyle.searchForm}>
            <View style={mainStyle.serchTextBox}>
              <Text style={mainStyle.serchText}>求人を検索してみよう！</Text>
            </View>
            <TouchableOpacity
              style={mainStyle.inputBox}
              onPress={onPressButton}>
              <View style={mainStyle.input}>
                <Text>職種、地域、企業名...</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={mainStyle.mainLinks}>
            <TouchableOpacity style={{flex: 1}}>
              <View style={mainStyle.mainLink}>
                <Image
                  source={{uri: 'https://job-draft.com/images/jobtoramap.png'}}
                  style={mainStyle.mainLinkIcon}
                />
                <Text style={mainStyle.buttonDetail}>
                  地図から仕事を探してみよう！
                </Text>
                <Text style={mainStyle.buttonTitle}>マップから探す</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}}>
              <View style={mainStyle.mainLink}>
                <Image
                  source={{
                    uri: 'https://job-draft.com/images/jobtorasearch.png',
                  }}
                  style={mainStyle.mainLinkIcon}
                />
                <Text style={mainStyle.buttonDetail}>
                  キミにぴったりの職業がわかる！
                </Text>
                <Text style={mainStyle.buttonTitle}>診断スタート</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={mainStyle.historyButtonFrame}>
            <View style={[mainStyle.historyButtonBox, styles.maruButton]}>
              <TouchableOpacity style={mainStyle.historyButton}>
                <Image style={mainStyle.historyIcon} />
                <Text style={mainStyle.historyText}>
                  前回の検索{'\n'}条件で探す
                </Text>
                <Text style={mainStyle.lastSeatch}></Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={[topic.topicSlider, styles.maruButton]}>
          <View style={topic.topicTextBox}>
            <Text style={topic.topicText}>お知らせ</Text>
          </View>
          <View style={topic.swiperBox}>
            <Swiper
              style={topic.swiper}
              autoplay={true}
              showsPagination={false}
              showsButtons={true}
              buttonWrapperStyle={topic.buttonWrapperStyle}>
              {topics.map(topi => {
                return (
                  <View style={topic.swiperContentBox} key={topi.text}>
                    <Text style={topic.swiperContent}>{topi.text}</Text>
                  </View>
                );
              })}
            </Swiper>
          </View>
        </View>
        <View style={lineFriend.box}>
          <TouchableOpacity style={lineFriend.touchable}>
            <Image
              style={lineFriend.image}
              source={{
                uri: 'https://job-draft.com/images/line-friend-banner.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={howToLink.box}>
          {links.map(data => {
            return (
              <View style={howToLink.contentBox} key={data.text}>
                <TouchableOpacity
                  style={[howToLink.content, styles.maruButton]}>
                  <Text style={howToLink.text}>{data.text}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <View style={contentSwiper.box}>
          <Swiper
            autoplay={true}
            showsPagination={false}
            style={{shadowRadius: 10, height: 300}}
            loadMinimal={true}
            loadMinimalSize={2}
            showAdjacentViews={true}
            adjacentViewsWidth={50}
            adjacentViewsPadding={10}>
            {contentsList.map((item, index) => {
              return (
                <View style={contentSwiper.contentBox} key={index}>
                  <Image
                    style={contentSwiper.content}
                    source={{uri: item.uri}}
                    resizeMode={'contain'}
                  />
                </View>
              );
            })}
          </Swiper>
        </View>
        <View style={pages.box}>
          <View style={[pages.howToJobdraft, styles.maruButton]}>
            <Text style={pages.forHigh}>高校生のための</Text>
            <View style={pages.titleBox}>
              <Text style={pages.title}>
                就職求人サイト{'\n'}ジョブドラフト
              </Text>
            </View>
            <View style={pages.textBox}>
              <Text style={pages.text}>
                就活をどうやっていいかわからない。
                進路や将来、⾃分がやりたいことがわからない。
                そもそも⾃分に何があっているのかもわからない。
                そんなあなたの悩みや不安を⼀緒に解決する、それがジョブドラフトです。
                あなたが⼀歩踏み出した時に、その可能性を最⼤限に広げる存在でいたい。
                ジョブドラフトは、就職を考える全国の⾼校⽣を応援しています。
              </Text>
              <TouchableOpacity style={[styles.maruButton, pages.button]}>
                <Text style={{color: 'blue'}}>ジョブドラフトについて</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={pages.consultationBox}>
            <View style={[styles.maruButton, pages.consultation]}>
              <View style={pages.consultationTextBox}>
                <Text style={pages.h2}>教えてジョブトラ！</Text>
                <Text style={pages.consultationText}>
                  就職活動ってどうやったらいいの？{'\n'}
                  そんなきになるところから紹介します。
                </Text>
              </View>
              <View style={pages.figure}>
                <Image
                  style={{flex: 1}}
                  source={{
                    uri: 'https://job-draft.com/images/top/consultation-img.png',
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={banners.box}>
          {bannerImage.map((item, index) => {
            return (
              <Image
                style={{width: '100%', height: 250}}
                key={index}
                source={{uri: item.uri}}
                resizeMode={'contain'}
              />
            );
          })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backColor: {
    backgroundColor: 'rgba(255,255,255,.6)',
  },
  maruButton: {
    borderRadius: 5,
    borderColor: 'white',
    overflow: 'hidden',
  },
});
const mainStyle = StyleSheet.create({
  multiCarouselBox: {
    width: '100%',
    height: 280,
  },
  multiCarsouslSwiper: {},
  multiCarousel: {
    width: '100%',
    height: 240,
  },
  mainVisual: {width: '100%', height: 360},
  searchForm: {
    flex: 3,
    justifyContent: 'center',
  },
  serchTextBox: {
    alignItems: 'center',
  },
  serchText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 20,
  },
  inputBox: {
    alignItems: 'center',
  },
  input: {
    marginTop: 0,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  mainLinks: {
    flexDirection: 'row',
    flex: 3,
  },
  mainLink: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
    margin: '3%',
  },
  mainLinkIcon: {
    width: 65,
    height: 60,
  },
  buttonDetail: {
    fontSize: 10,
  },
  buttonTitle: {
    fontSize: 15,
    color: 'blue',
    fontWeight: 'bold',
  },
  historyButtonFrame: {
    flex: 2,
  },
  historyButtonBox: {
    flex: 1,
    marginHorizontal: '3%',
    marginBottom: '3%',
    backgroundColor: '#01559d',
    flexDirection: 'row',
  },
  historyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  historyIcon: {
    flex: 1,
  },
  historyText: {
    flex: 2,
    color: 'white',
    fontWeight: 'bold',
  },
  lastSeatch: {flex: 7},
  backImage: {
    width: '100%',
    height: '100%',
  },
  backIlust: {
    position: 'absolute',
    top: '50%',
    right: 0,
    bottom: 0,
    left: 0,
  },
});
const topic = StyleSheet.create({
  topicSlider: {
    height: 70,
    marginHorizontal: '3%',
    marginBottom: '5%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  topicTextBox: {
    margin: 10,
    justifyContent: 'center',
    zIndex: 1,
  },
  topicText: {left: '10%'},
  swiperBox: {
    flex: 5,
  },
  swiper: {},
  swiperContentBox: {
    flex: 1,
    justifyContent: 'center',
  },
  swiperContent: {
    width: '90%',
    color: 'blue',
  },
  buttonWrapperStyle: {
    width: '130%',
    height: '100%',
    position: 'absolute',
    left: '-27%',
    top: '-20%',
  },
});
const lineFriend = StyleSheet.create({
  box: {
    width: '100%',
    height: 180,
  },
  touchable: {
    flex: 1,
    marginHorizontal: 32,
    marginVertical: 40,
  },
  image: {
    flex: 1,
  },
});
const howToLink = StyleSheet.create({
  box: {
    width: '100%',
    height: 111,
    flexDirection: 'row',
  },
  contentBox: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: '5%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 13,
  },
});
const contentSwiper = StyleSheet.create({
  box: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
  },
  contentBox: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const pages = StyleSheet.create({
  box: {
    width: '100%',
    height: 760,
  },
  howToJobdraft: {
    width: '95%',
    height: 550,
    marginTop: 30,
    marginHorizontal: '2.5%',
    backgroundColor: 'rgba(255,255,255,.3)',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forHigh: {
    flex: 1,
    top: 13,
    paddingHorizontal: 16,
    paddingVertical: 4,
    color: 'white',
    backgroundColor: 'blue',
    fontSize: 25,
  },
  titleBox: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  textBox: {
    flex: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18.4,
    color: 'black',
  },
  button: {
    height: 55,
    marginVertical: 15,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'blue',
  },
  consultationBox: {
    width: '100%',
    height: 180,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  consultation: {
    width: '95%',
    height: 130,
    borderWidth: 5,
    borderColor: 'yellow',
    backgroundColor: 'rgba(255,255,255,.7)',
    flexDirection: 'row',
    padding: 12,
  },
  consultationTextBox: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  h2: {
    paddingBottom: 10,
    fontSize: 25,
    color: 'black',
  },
  consultationText: {color: 'black'},
  figure: {
    width: 80,
    height: '100%',
    flex: 1,
  },
});
const banners = StyleSheet.create({
  box: {
    height: 1000,
    marginVertical: 50,
  },
});
