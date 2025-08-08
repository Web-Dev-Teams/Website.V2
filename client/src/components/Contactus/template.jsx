import useResponsive from '../../hooks/useResponsive';

const Template = (props) => {
  return (
    <div>
      <h2 style={props.styles.templateHeadingStyle}>{props.queryType}</h2>
      <p style={props.styles.templateTextStyle}>{props.email}</p>
      <p style={props.styles.templateTextStyle}>{props.name} : {props.number}</p>
    </div>
  );
};

const DetailBox = () => {
  const smallScreen = useResponsive();

  const styles = {
    detailBoxContainerStyle: {
      width: '100%',
      maxWidth: smallScreen ? '90%' : '31rem',
      margin: smallScreen ? '1.5rem auto' : '4rem 1rem',
      padding: smallScreen ? '1rem' : '1.5rem',
      backgroundColor: '#f9f9f9',
      borderRadius: '0.5rem',
      boxShadow: '0 0.25rem 0.375rem rgba(0, 0, 0, 0.1)',
      boxSizing: 'border-box',
    },
    templateHeadingStyle: {
      fontSize: smallScreen ? '1.5rem' : '2rem',
      fontWeight: 'bold',
      marginBottom: smallScreen ? '0.5rem' : '0.625rem',
    },
    templateTextStyle: {
      fontSize: smallScreen ? '1rem' : '1.375rem',
      marginBottom: smallScreen ? '0.25rem' : '0.3125rem',
      fontWeight: 'normal',
    }
  };

  return (
    <div style={styles.detailBoxContainerStyle}>
      <Template 
        queryType="All General Queries" 
        name="Whatsapp Number" 
        email="info.unnatiwelfaresociety@gmail.com" 
        number="8058060375"
        styles={styles}
      />
      <Template 
        queryType="Donation Related Queries" 
        name="Devanshu Singh" 
        email="donation.unnatiwelfaresociety@gmail.com" 
        number="8058060375"
        styles={styles}
      />
      <Template 
        queryType="For Media-Related Queries" 
        name="Shivam Kumar Gautam" 
        email="media.unnatiwelfaresociety@gmail.com" 
        number="8058060375"
        styles={styles}
      />
    </div>
  );
};

export default DetailBox;
