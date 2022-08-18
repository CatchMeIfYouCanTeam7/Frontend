import styled from 'styled-components';

export const StSignUpDiv = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	/* height: 400px; */
	align-items: flex-start;

  .signUpItem {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100px;
  }

	label {
		margin-top: 10px;
		margin-left: 2px;
	}
  span {
    margin-top: 5px;
    font-size: 15px;
    margin-left: 2px;
  }
`;

export const StSignUpForm = styled.form`
	height: 500px;
	text-align: center;
`;
