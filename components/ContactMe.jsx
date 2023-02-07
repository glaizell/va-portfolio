import Button from './UI/Button';

function ContactMe(props) {
  return (
    <div id='contact' className='w-full p-2 py-16'>
      <div className='max-w-[1240px] m-auto text-center'>
        <p className='uppercase text-xl tracking-widest text-[#FFD000]'>
          HAVE A PROJECT IN MIND?
        </p>
        <h2 className='py-8 md:py-12 md:text-5xl text-2xl'>
          You’re one step closer to making an outstanding brand!
        </h2>
        <Button onShowContactForm={props.onShowContactForm} />
      </div>
    </div>
  );
}

export default ContactMe;
