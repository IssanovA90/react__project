import './Grid.css';

const Grid = () => {
  return (
    <div className="grid">
      <div className="big-block">Стандартный RitmStyle</div>
      <div className="blocks">
        <div className="block">RitmStyle для пар</div>
        <div className="block"><p className='grid__text'>RitmStyle с полным погружением под воду</p></div>
        <div className="block">RitmStyle для беременных</div>
        <div className="block"><p className='grid__text'>RitmStyle + красочная подводная фотосессия</p></div>
      </div>
    </div>
  );
};

export default Grid;