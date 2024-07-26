import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';

interface NewsItem {
  u_id: number;
  title: string;
  description: string;
  author: string;
  imageUrl: string;
}

function App() {
  const renderNews = ({item}: {item: NewsItem}) => <NewsCard news={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}> News </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        // eslint-disable-next-line react/no-unstable-nested-components
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {news_banner_data.map(bannerNews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannerNews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()} // Ensure 'u_id' exists and is unique
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
  },
});

export default App;
