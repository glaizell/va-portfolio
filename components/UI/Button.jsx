import { FaLongArrowAltRight } from 'react-icons/fa';

function Button(props) {
  return (
    <button
      onClick={props.onShowContactForm}
      className='border py-4 px-6 md:py-6 md:px-12 hover:bg-[#ffd000] hover:text-black text-lg md:text-2xl cursor-pointer hover:scale-110 ease-in duration-300'
    >
      Let&#39;s Talk
      <span className='ml-4'>
        <FaLongArrowAltRight className='inline-block' />
      </span>
    </button>
  );
}
export default Button;
