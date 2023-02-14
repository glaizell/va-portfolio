import Button from './UI/Button';

function ContactMe(props) {
  return (
    <div
      id='contact'
      className='max-w-[1240px] h-screen w-full mx-auto p-2 flex justify-center items center'
    >
      <div className='max-w-[1240px] m-auto text-center'>
        <p className='uppercase text-xl tracking-widest text-[#FFD000] mb-6 lg:mb-10'>
          HAVE A PROJECT IN MIND?
        </p>
        <h2 className='py-8 md:py-4 md:text-5xl text-2xl mb-6 lg:mb-8'>
          Let&#39;s connect and simplify your workload.
        </h2>
        <Button onShowContactForm={props.onShowContactForm} />
      </div>
    </div>
  );
}

export default ContactMe;
