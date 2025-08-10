import useResponsive from '../../hooks/useResponsive';

const Template = (props) => {
  return (
    <div className="detail-template">
      <h2 className="detail-template-heading">{props.queryType}</h2>
      <p className="detail-template-text">{props.email}</p>
      <p className="detail-template-text">{props.name} : {props.number}</p>
    </div>
  );
};

const DetailBox = () => {
  return (
    <div className="detailbox-responsive-container">
      <Template 
        queryType="All General Queries" 
        name="Whatsapp Number" 
        email="info.unnatiwelfaresociety@gmail.com" 
        number="8058060375"
      />
      <Template 
        queryType="Donation Related Queries" 
        name="Devanshu Singh" 
        email="donation.unnatiwelfaresociety@gmail.com" 
        number="8058060375"
      />
      <Template 
        queryType="For Media-Related Queries" 
        name="Shivam Kumar Gautam" 
        email="media.unnatiwelfaresociety@gmail.com" 
        number="8058060375"
      />
    </div>
  );
};

export default DetailBox;
