import { Helmet } from 'react-helmet';

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'MERNshop',
  description: 'Portfolio MERN e-commerce shop'
};

export default Meta;
