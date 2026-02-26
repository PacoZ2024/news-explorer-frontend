import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader.jsx';
import NewsCardList from '../NewsCardList/NewsCardList.jsx';

export default function SavedNews() {
  return (
    <div className='saved-news'>
      <SavedNewsHeader />
      <NewsCardList />
    </div>
  );
}
