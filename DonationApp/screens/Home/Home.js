import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {resetToInitialState} from '../../redux/reducers/User';
import {updateSelectedCategoryId} from '../../redux/reducers/Categories';

const Home = () => {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories);
  dispatch(resetToInitialState());
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello, </Text>
            <View style={style.username}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '. 👋'}
              />
            </View>
          </View>
          <Image
            source={{uri: user.profileImage}}
            style={style.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={style.searchBox}>
          <Search />
        </View>
        <Pressable style={style.highlightedImageContainer}>
          <Image
            style={style.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={style.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({item}) => (
              <View style={style.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  title={item.name}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
