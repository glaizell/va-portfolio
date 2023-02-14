import Button from './UI/Button';

function ContactMe(props) {
  return (
    <div id='contact' className='max-w-[1240px] w-full mx-auto p-2 py-16'>
      <div className='max-w-[1240px] m-auto text-center'>
        <p className='uppercase text-xl tracking-widest text-[#FFD000] mb-12 md:mb-8'>
          HAVE A PROJECT IN MIND?
        </p>
        <h2 className='py-8 md:py-4 md:text-5xl text-2xl mb-14 md:mb-4'>
          You’re one step closer to making an outstanding brand!
        </h2>
        <Button onShowContactForm={props.onShowContactForm} />
      </div>
    </div>
  );
}

export default ContactMe;
