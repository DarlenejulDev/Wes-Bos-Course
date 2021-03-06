import ResetPage from '../components/Reset';

const Sell = props => (
  <div>
    <p>Reset Your Password {props.query.resetToken}</p>
    <ResetPage resetToken={props.query.resetToken} />
  </div>
);

export default Sell;