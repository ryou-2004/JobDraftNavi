import React, {Component, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Swiper from 'react-native-swiper';

import JobSerchData from '../json/JobSerchData.json';
import JobData from '../json/JobData.json';
jinjibuData = JobData.jinjibu;

var companyImageURI =
  'https://jinjibstorage.blob.core.windows.net/job-draft/uploads/job/thumbnail/859/thumbnail.jpg';
var companyTitleData =
  '高卒就活の常識を共に変えよう！！「ジンジブ」ではあなたのすべてが武器になる。';
var companyNameData = '株式会社ジンジブ';
var prefecturesData = '港区,大阪市中央区,福岡市博多区,名古屋市中区';
var salaryData = [
  {title: '企画・営業(法人)', salary: 20.8},
  {title: 'その他福祉・教育関係', salary: 20.8},
  {title: '編集・ライター', salary: 20.8},
];
var conditionData = [
  '年間休日120日',
  '紹介動画あり',
  '高卒先輩社員が活躍',
  '若手社員活躍',
  'メディア掲載実績あり',
  '教育・研修充実',
  '完全週休二日',
  '年末年始休暇あり',
  'GW休み',
];

export default function JobSerchScreen({navigation}) {
  const [isLineModal, setLineModal] = useState(false);
  const [isSerchModal, setSerchModal] = useState(true);
  const [isSerch, setSerch] = useState(false);

  const tabName = [
    '特徴から探す',
    '職種から探す',
    '地域から探す',
    '駅から探す',
  ];
  const tabContent = [Content1, Content2, Content3, Content4];
  const openLineModal = () => {
    setLineModal(true);
  };
  const closeleLineModal = () => {
    setLineModal(false);
  };
  const toggleSerchModal = () => {
    setSerchModal(!isSerchModal);
  };
  const onPressSerch = () => {
    setSerchModal(false);
    setSerch(true);
  };
  var keyword = '';

  function CheckBox(props) {
    const [flag, setFlag] = useState(true);
    const [checkBoxColor, setBoxColor] = useState({backgroundColor: 'gray'});
    const [checkTextColor, setTextColor] = useState({color: 'black'});
    const toggleData = () => {
      if (flag) {
        setBoxColor({backgroundColor: 'blue'});
        setTextColor({color: 'white'});
      } else {
        setBoxColor({backgroundColor: 'gray'});
        setTextColor({color: 'black'});
      }
      setFlag(!flag);
      props.flag();
    };
    return (
      <TouchableOpacity
        style={[checkBoxColor, styles.maruButton, content1.checkBox]}
        activeOpacity={1}
        onPress={toggleData}>
        <View style={content1.checkTextBox}>
          <Text style={checkTextColor}>{props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  function CreateCategory(props) {
    var SubTitle = () => <></>;

    if (props.isSubTitle) {
      SubTitle = () => (
        <Text style={content1.categorySubTitleText}>{props.data.subTitle}</Text>
      );
    }
    return (
      <>
        <View style={content1.categorySubTitleBox}>
          <SubTitle></SubTitle>
        </View>
        <View style={content1.categoryBox}>
          {props.data.texts.map((item, index) => {
            return (
              <CheckBox
                text={item.title}
                flag={() => {
                  item.check = !item.check;
                }}
                key={index}></CheckBox>
            );
          })}
        </View>
      </>
    );
  }
  function Content1() {
    function Input() {
      const [inputStyle, setBorderColor] = useState(content1.input);
      return (
        <TextInput
          style={[styles.maruButton, inputStyle]}
          placeholder="例）大阪 テーマパーク  などスペースで区切ってね"
          onFocus={() => {
            setBorderColor(content1.inputActive);
          }}
          onBlur={() => {
            setBorderColor(content1.input);
          }}
        />
      );
    }
    return (
      <ScrollView style={content1.box} showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={[styles.maruButton, content1.previousBox]}
          activeOpacity={1}>
          <Text style={content1.previousTitle}>前回の検索{'\n'}条件で探す</Text>
          <Text style={content1.previousTextBox}>ジンジブ</Text>
        </TouchableOpacity>
        <View style={[styles.maruButton, content1.inputFrame]}>
          <Input></Input>
        </View>
        <View style={content1.entryFields}>
          <CheckBox
            text={'学校と就活'}
            flag={() => {
              JobSerchData.data.content1.school =
                !JobSerchData.data.content1.school;
            }}></CheckBox>
          <CheckBox
            text={'自分で就活'}
            flag={() => {
              JobSerchData.data.content1.direct =
                !JobSerchData.data.content1.direct;
            }}></CheckBox>
        </View>
        {JobSerchData.data.content1.contentList.map(
          (contentList, contentListIndex) => {
            return (
              <View key={contentListIndex}>
                <View style={content1.categoryTitleBox}>
                  <Text style={content1.categoryTitleText}>
                    {contentList.title}
                  </Text>
                </View>
                {contentList.list.map((item, itemIndex) => {
                  return (
                    <CreateCategory
                      data={item}
                      isSubTitle={contentList.isSubTitle}
                      key={itemIndex}></CreateCategory>
                  );
                })}
              </View>
            );
          },
        )}
        <View style={{height: 90}}></View>
      </ScrollView>
    );
  }
  function Content2() {
    return <Text>content2</Text>;
  }
  function Content3() {
    return <Text>content3</Text>;
  }
  function Content4() {
    return <Text>content4</Text>;
  }
  function Frame() {
    let swiper = null;
    var currentIndex = 0;
    function GetIndex(index) {
      if (currentIndex !== index) {
        let resultSlide = undefined;
        let countSlides = 4;

        if (index > currentIndex && index !== countSlides) {
          resultSlide = index - currentIndex;
          swiper.scrollBy(resultSlide, true);
        } else if (index > currentIndex && index === countSlides) {
          resultSlide = currentIndex + 1;
          swiper.scrollBy(resultSlide, true);
        } else if (index < currentIndex && index !== 0) {
          resultSlide = (currentIndex - index) * -1;
          swiper.scrollBy(resultSlide, true);
        } else if (index < currentIndex && index === 0) {
          resultSlide = currentIndex * -1;
          swiper.scrollBy(resultSlide, true);
        }
      }
    }
    return (
      <>
        <TouchableOpacity style={serach.box} onPress={toggleSerchModal}>
          <View style={[styles.maruButton, serach.mojlex]}>
            <Text style={serach.mojlexText}></Text>
          </View>
          <View style={[styles.maruButton, serach.resultMojlex]}>
            <Text style={serach.resultMojlexCount}>0</Text>
            <Text style={serach.resultMojlexText}>件</Text>
          </View>
        </TouchableOpacity>
        <Modal isVisible={isSerchModal}>
          <View style={serchModal.modalBox}>
            <View style={serchModal.closeButtonBox}>
              <TouchableOpacity
                style={serchModal.closeButton}
                activeOpacity={1}
                onPress={toggleSerchModal}>
                <Text style={serchModal.closeButtonFont}>×</Text>
              </TouchableOpacity>
            </View>
            <View style={serchModal.formBox}>
              <Text style={serchModal.formTItle}>検索条件・絞り込み</Text>
              <View style={serchModal.serchManu}>
                <View style={serchModal.serchManuTabFrame}>
                  {tabName.map((item, index) => {
                    return (
                      <TouchableOpacity
                        style={serchModal.serchManuTabBox}
                        key={index}
                        onPress={() => {
                          GetIndex(index);
                        }}
                        activeOpacity={1}>
                        <Text style={serchModal.serchManuTab}>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <Swiper
                  ref={sw => {
                    swiper = sw;
                  }}
                  onIndexChanged={index => {
                    currentIndex = index;
                  }}
                  dotStyle={serchModal.dot}
                  activeDotStyle={serchModal.activeDot}>
                  {tabContent.map((Item, index) => {
                    return <Item key={index}></Item>;
                  })}
                </Swiper>
                <View></View>
              </View>
            </View>
          </View>
          <View style={serchModal.serchButtonBox}>
            <TouchableOpacity style={serchModal.serchReset}>
              <Text style={serchModal.serchResetText}>条件リセット</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={serchModal.serchButton}
              onPress={onPressSerch}>
              <Text style={serchModal.serchButtonText}>50</Text>
              <Text style={serchModal.serchButtonText1}>件</Text>
              <Text style={serchModal.serchButtonText2}>表示する</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <Modal isVisible={isLineModal} onBackdropPress={closeleLineModal}>
          <View style={lineModal.modal}>
            <View style={lineModal.line}>
              <Image
                style={[lineModal.logo, lineModal.notLoginMoadal]}
                source={require('../assets/logo_color.jpg')}
                resizeMode="stretch"
              />
              <Text style={[lineModal.notLoginMoadal, {fontWeight: 'bold'}]}>
                ログインしてください。
              </Text>
              <Text style={lineModal.notLoginMoadal}>
                本機能を利用するにはログインが必要です。
              </Text>
              <View style={[styles.maruButton, lineModal.loginButtonBox]}>
                <Button
                  title="LINEログイン"
                  color="green"
                  style={lineModal.loginButton}
                />
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }
  if (isSerch) {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <Frame></Frame>
        <ScrollView>
          <JobItem
            toggleModal={() => {
              openLineModal();
            }}
            navigation={navigation}></JobItem>
          <JobItem
            toggleModal={() => {
              openLineModal();
            }}
            navigation={navigation}></JobItem>
          <JobItem
            toggleModal={() => {
              openLineModal();
            }}
            navigation={navigation}></JobItem>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <Frame></Frame>
      </SafeAreaView>
    );
  }
}
function JobItem(props) {
  const onPressDatail = () => {
    props.navigation.navigate('求人詳細');
  };
  return (
    <View style={jobItemInner.container}>
      <View style={jobItemInner.jobItem}>
        <TouchableOpacity onPress={onPressDatail}>
          <View style={jobItemInner.companyTitlesWrap}>
            <View style={jobItemInner.companyImageBox}>
              <Image
                style={jobItemInner.companyImage}
                resizeMode="contain"
                source={{
                  uri: jinjibuData.companyImageURI,
                }}
              />
            </View>
            <Text style={jobItemInner.companyTitle}>
              {jinjibuData.companyTitleData}
            </Text>
            <Text style={[jobItemInner.companyName, jobItemInner.blue]}>
              {jinjibuData.companyNameData}
            </Text>
          </View>
          <View style={jobItemInner.companyDetails}>
            <View style={jobItemInner.prefecturesBox}>
              <Text>{jinjibuData.prefecturesData}</Text>
            </View>
            <View style={jobItemInner.salaryBox}>
              <View style={jobItemInner.salaryTitle}>
                {jinjibuData.salaryData.map((data, index) => {
                  return (
                    <Text style={[jobItemInner.blue]} key={index}>
                      {data.title}
                    </Text>
                  );
                })}
              </View>
            </View>
          </View>
          <View style={jobItemInner.conditions}>
            {jinjibuData.conditionData.map((data, index) => {
              return (
                <Text style={jobItemInner.condition} key={index}>
                  {data}
                </Text>
              );
            })}
            <Text style={[jobItemInner.condition, jobItemInner.blue]}>
              全て見る
            </Text>
          </View>
        </TouchableOpacity>
        <View style={jobItemInner.buttonBox}>
          <View style={jobItemInner.button}>
            <Button title="職場見学する" onPress={props.toggleModal} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maruButton: {
    borderRadius: 5,
    borderColor: 'white',
    overflow: 'hidden',
  },
});
const serach = StyleSheet.create({
  box: {
    width: '95%',
    height: 50,
    marginHorizontal: '5%',
    marginVertical: '2%',
    flexDirection: 'row',
    padding: '1%',
  },
  mojlex: {
    flex: 3,
    marginRight: 5,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    paddingLeft: '10%',
  },
  mojlexText: {},
  resultMojlex: {
    flex: 1,
    backgroundColor: 'blue',
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultMojlexCount: {
    fontSize: 25,
    color: 'white',
  },
  resultMojlexText: {
    top: 5,
    color: 'white',
  },
});
const serchModal = StyleSheet.create({
  modalBox: {
    flex: 1,
    backgroundColor: 'white',
  },
  formBox: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    borderColor: 'white',
    overflow: 'hidden',
  },
  formTItle: {
    height: 30,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  serchManu: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serchManuTabFrame: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  serchManuTabBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  serchManuTab: {
    color: 'black',
    fontWeight: 'bold',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: '25%',
    height: 5,
    top: -640,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot: {
    backgroundColor: '#007aff',
    width: '25%',
    height: 5,
    top: -640,
    marginTop: 3,
    marginBottom: 3,
  },
  closeButtonBox: {
    flexDirection: 'row-reverse',
  },
  closeButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: -15,
    left: -15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'gray',
    zIndex: 1,
  },
  closeButtonFont: {
    fontSize: 50,
    top: -14,
  },
  serchButtonBox: {
    position: 'absolute',
    width: '100%',
    height: 50,
    bottom: 10,
    flexDirection: 'row',
    paddingHorizontal: 10,
    jusi: 'center',
  },
  serchReset: {
    flex: 1,
    right: 5,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serchResetText: {
    color: 'white',
    fontWeight: 'bold',
  },
  serchButton: {
    flex: 2,
    left: 5,
    borderRadius: 25,
    overflow: 'hidden',
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  serchButtonText: {
    fontSize: 20,
    color: 'white',
  },
  serchButtonText1: {
    fontSize: 15,
    color: 'white',
    top: 5,
    marginRight: 10,
    marginLeft: 5,
  },
  serchButtonText2: {
    fontSize: 15,
    color: 'white',
  },
});
const content1 = StyleSheet.create({
  box: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 5,
  },
  previousBox: {
    width: '100%',
    height: 40,
    paddingLeft: 30,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  previousTitle: {
    flex: 1,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  previousTextBox: {
    flex: 3,
    color: 'white',
  },
  inputFrame: {
    borderWidth: 1,
    marginBottom: 10,
    borderColor: 'gray',
    padding: 2,
  },
  input: {
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0)',
  },
  inputActive: {
    borderWidth: 3,
    borderColor: 'blue',
  },
  entryFields: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 10,
  },
  checkBox: {
    width: '47%',
    height: 40,
    marginHorizontal: 5,
    marginBottom: 10,
  },
  checkTextBox: {
    width: '80%',
    height: '100%',
    left: 30,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  checkText: {},
  categoryTitleBox: {
    height: 35,
    margin: 10,
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  categoryTitleText: {
    left: 30,
    color: 'aqua',
  },
  categoryBox: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categorySubTitleBox: {
    marginBottom: 5,
  },
  categorySubTitleText: {
    left: 30,
    color: 'aqua',
  },
});
const content2 = StyleSheet.create({});
const content3 = StyleSheet.create({});
const content4 = StyleSheet.create({});
const lineModal = StyleSheet.create({
  modal: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 30,
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: 225,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  notLoginMoadal: {marginBottom: '5%'},
  loginButtonBox: {width: '70%'},
  loginButton: {flex: 1},
});
const jobItemInner = StyleSheet.create({
  container: {
    backgroundColor: '#ECECEC',
  },
  jobItem: {
    width: '95%',
    marginHorizontal: '2.5%',
  },
  companyTitlesWrap: {
    backgroundColor: 'white',
  },
  companyImageBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  companyImage: {
    width: 390,
    height: 259,
  },
  companyTitle: {
    fontSize: 16,
    margin: '3%',
    marginBottom: 0,
  },
  companyName: {
    fontSize: 16,
    marginHorizontal: '3%',
    fontFamily: 'Baskerville-Bold',
  },
  companyDetails: {
    marginTop: '1%',
  },
  prefecturesBox: {
    width: '100%',
    fontSize: 16,
    backgroundColor: 'white',
  },
  salaryBox: {
    marginTop: '1%',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  salaryTitle: {flexDirection: 'column'},
  salary: {flexDirection: 'column'},
  conditions: {
    marginTop: '1%',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  condition: {
    width: 67,
    height: 67,
    margin: '1%',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonBox: {
    height: 45,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '80%',
    marginHorizontal: '10%',
    borderRadius: 20,
    overflow: 'hidden',
  },
  blue: {
    color: 'blue',
  },
});
