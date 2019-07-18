/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert } from 'react-native';
import ImagePicker from 'react-native-micoup-image-picker'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

/*
.
사진을 업로드한다. (여러개를 한꺼번에 업로드 가능)
url : '/zero/p/file_upload.php'
enctype : multipart/form-data
파라미터
files[] : 그림파일
id : 'hotdeal' - 핫딜 게시판
no : '-1' - 새글이란 의미
실패:
부분 실패란 없다.(두개를 업로드해서 한개는 성공하고 한개를 실패하면 서버측에서 알아서 성공한 파일도 삭제하고 실패를 반환)
에러 메시지를 출력하고 editor 창으로 되돌아감.
성공:
사진의 식별번호를 할당받는다. 1266393, 1266394라고 하자.
반환 : json format
{
"success":true,
"result":true,
"msg":"업로드되었습니다.",
"success_count":2,
"count":2,
"files":[
{
 "name":"win_distr.jpg",
 "success":true,
 "msg":"성공",
 "image_id":1266393,
 "serial":"5188120199046026725",
 "width":230,
 "height":164,
 "url":
   "icon/member_image_box/444/win_distr.jpg",
 "updated":null
},
{
 "name":"distr.jpg",
 "success":true,
 "msg":"성공",
 "image_id":1266394,
 "serial":"7188122199046026723",
 "width":230,
 "height":164,
 "url":
   "icon/member_image_box/444/distr.jpg",
 "updated":null
}
]
}
url이 이후에도 https://나 http://로 시작되면 그대로 사용해주세요.
 */
export default class App extends Component<Props> {

  showImagePicker = () => {
    ImagePicker.showImagePickerWithOptions({
      boardId: 'review',
      documentNo: '-1',
      cookie: 'MCSESSID=ae3630d20bba59d1b88a75134e00ff2a',
      userAgent: 'MissyCouponsTest/1.0.6(197.1)',
      imageUploadURL: 'http://a-s1.micoup.com/zero/p/file_upload.php',
      imageCount: 3,
      spanCount: 3,
      enableCamera: true
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button title={"Image Picker"} onPress={this.showImagePicker} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
