import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const areaLists = [
  '東京都港区',
  '大阪府大阪市中央区',
  '福岡県福岡市博多区',
  '愛知県名古屋市中区',
];

const titleH1 =
  '高卒就活の常識を共に変えよう！！「ジンジブ」ではあなたのすべてが武器になる。';

const jobPoints = [
  '紹介動画あり',
  '高卒先輩社員が活躍',
  '交通費全額支給',
  '土日祝休み',
  '年間休日120日',
  '完全週休二日',
  'GW休み',
  '年末年始休暇あり',
  'メディア掲載実績あり',
  '若手社員活躍',
  '教育・研修充実',
  'アットホームな社風',
  '同年代が多い',
  '高収入',
  '資格取得支援あり',
  '育休該当者実績あり',
  '職場見学歓迎',
  '欠席日数関係なし',
  'オンライン職場見学',
];
const article =
  '当社は、高校生のための就職支援サービス「ジョブドラフト」を運営している会社です。「高卒という強みを活かして活躍したい！」そんなあなたにお越しいただけるのを、心よりお待ちしております。';
const salaryList = [
  '企画・営業（法人）',
  'その他福祉・教育関係',
  '編集・ライター',
];

export default function JobOfferTop({navigation}) {
  function AreaJoin() {
    let text = areaLists.join();
    return <Text style={styles.areaText}>{text}</Text>;
  }
  return (
    <ScrollView>
      <View style={styles.topImageBox}>
        <Image
          source={{
            uri: 'https://jinjibstorage.blob.core.windows.net/job-draft/uploads/job/image/859/image.jpg',
          }}
          style={styles.topImage}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.areaBox}>
          <Text style={styles.onLineTourTag}>オンライン職場見学</Text>
          <AreaJoin></AreaJoin>
        </View>
        <Text style={styles.titleH1}>{titleH1}</Text>
        <View style={styles.jobPointsBox}>
          {jobPoints.map((item, index) => {
            return (
              <Text
                style={[
                  styles.jobPoint,
                  {
                    marginBottom: 5,
                    marginLeft: index % numCols !== 0 ? 15 : 0,
                  },
                ]}
                key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <View style={styles.datesBox}>
          <Text style={styles.dateText}>更新日時：2022年10月07日 11:15</Text>
          <Text style={styles.dateText}>公開日時：2022年04月01日 00:00</Text>
        </View>
        <Text style={styles.article}>{article}</Text>
        <View style={styles.salaryBox}>
          {salaryList.map((item, index) => {
            return (
              <Text style={styles.salary} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <TouchableOpacity style={styles.contactBox}>
          <Text style={styles.contactText}>この求人について問い合わせ</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.questionBox}>
        <Text style={styles.questionTitle}>質問コーナー</Text>
        <View style={styles.questionWrap}>
          <View style={styles.guide}>
            <Image
              style={styles.guideImage}
              source={{
                uri: 'https://job-draft.com/images/jobs/qa/qa-section-img.png',
              }}
            />
            <Text style={styles.guideText}>
              気になることを質問してみよう！{'\n'}
              企業の担当者から直接返答がもらえるよ！（返答まで日数がかかる場合もあります）
            </Text>
          </View>
          <View style={styles.notLogin}>
            <ImageBackground
              style={styles.backImage}
              source={{uri: 'https://job-draft.com/images/jobs/qa/filter.png'}}>
              <View style={styles.notLoginBox}>
                <Text style={styles.notLoginText}>
                  会員登録すると、みんなの質問や企業の回答が見れるよ！{'\n'}
                  もちろん、直接企業に質問もできる！
                </Text>
                <TouchableOpacity>
                  <Text style={styles.loginButtonText}>
                    会員登録・ログインはこちららから
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

numCols = 5;
const styles = StyleSheet.create({
  mainContainer: {marginHorizontal: 18},
  topImageBox: {
    width: '100%',
    height: 276,
  },
  topImage: {
    flex: 1,
  },
  jobTopContent: {},
  onLineTourTag: {
    position: 'absolute',
    top: 0,
    left: 20,
    backgroundColor: 'skyblue',
    color: 'white',
  },
  areaBox: {
    paddingTop: 24,
    paddingRight: 18,
    paddingLeft: 40,
  },
  areaText: {
    fontSize: 13,
    color: 'black',
  },
  titleH1: {
    marginVertical: 18,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  jobPointsBox: {
    marginBottom: 8,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  jobPoint: {
    width: 60,
    height: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
  datesBox: {
    marginBottom: 15,
  },
  dateText: {
    flex: 1,
    textAlign: 'right',
    color: 'black',
  },
  article: {
    padding: 21,
    fontSize: 15,
    lineHeight: 30,
    color: 'black',
    borderTopWidth: 2,
    borderTopColor: 'black',
  },
  salaryBox: {
    marginBottom: 40,
  },
  salary: {
    paddingLeft: 10,
    lineHeight: 40,
    marginBottom: 2,
    textAlign: 'left',
    color: 'white',
    backgroundColor: 'blue',
  },
  contactBox: {
    marginBottom: 40,
    alignItems: 'center',
  },
  contactText: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    textAlignVertical: 'center',
    overflow: 'hidden',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'blue',
    color: 'blue',
  },
  questionBox: {
    width: '100%',
    height: 660,
    paddingTop: 30,
    paddingBottom: 100,
    backgroundColor: 'rgb(255, 241, 0)',
  },
  questionTitle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 27,
    color: 'black',
  },
  questionWrap: {
    height: 460,
  },
  guide: {
    paddingHorizontal: 30,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'green',
  },
  guideImage: {
    bottom: 20,
    flex: 1,
  },
  guideText: {
    flex: 2,
    marginVertical: 25,
    padding: 5,
    textAlignVertical: 'center',
    color: 'black',
    backgroundColor: 'white',
    overflow: 'hidden',
    borderRadius: 7,
  },
  notLogin: {
    flex: 2,
  },
  notLoginBox: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
    overflow: 'hidden',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  notLoginText: {
    fontSize: 16,
    overflow: 'hidden',
    borderRadius: 7,
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 10,
    color: 'black',
  },
  loginButtonText: {
    paddingHorizontal: 30,
    paddingVertical: 17,
    overflow: 'hidden',
    borderRadius: 7,
    backgroundColor: 'green',
    color: 'white',
  },
  backImage: {
    flex: 1,
  },
});
