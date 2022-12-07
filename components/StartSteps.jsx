import styles from '../styles';

const StartSteps = ({ icon, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img className='w-1/2 h-1/2 object-contain' src={icon} />
    </div>
    <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]'>
      {text}
    </p>
  </div>
);

export default StartSteps;
