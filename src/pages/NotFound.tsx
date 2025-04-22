import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1>404 - ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <Link to='/'>ホームに戻る</Link>
    </div>
  );
}
