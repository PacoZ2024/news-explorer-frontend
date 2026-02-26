import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

export default function SavedNews() {
  return (
    <main className='saved-news'>
      <SavedNewsHeader />
      <NewsCardList />
    </main>
  );
}
