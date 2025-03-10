const Card = () => {
  return (
    <div className='flex justify-left items-center border-1 border-pink-500 bg-transparent gap-4 py-2 px-3 rounded-3xl mb-4'>
      <div className='w-15 h-15 bg-pink-300 border-pink-500 border-1 rounded-xl'></div>
      <div>
        <h4 className='text-pink-500'>Chill Mix</h4>
        <p className='text-pink-500'>50 songs</p>
      </div>
    </div>
  );
};

export default Card;
