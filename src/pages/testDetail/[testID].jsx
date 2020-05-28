import Head from 'next/head';
import { useRouter } from 'next/router';

function TestDetail() {
  const router = useRouter();
  const { testID } = router.query;

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Test Detail</title>
      </Head>
      <h1>{testID}</h1>
    </>
  );
}

export default TestDetail;

// import { useSession } from '../context/SessionContext';
// import AddIcon from '../assets/icons/add.svg';
// import DownloadIcon from '../assets/icons/download.svg';
// function displayOptions() {
//   if (session && session.user.typeOfUser === 'Administrator') {
//     return (
//       <td className="table__body__row__cell__options">
//         <AddIcon className="table__body__row__cell__icon" />
//         <DownloadIcon className="table__body__row__cell__icon" />
//       </td>
//     );
//   }

//   if (session && session.user.typeOfUser === 'Doctor') {
//     return (
//       <td className="table__body__row__cell__options">
//         <DownloadIcon className="table__body__row__cell__icon" />
//       </td>
//     );
//   }

//   if (session && session.user.typeOfUser === 'Bacteriologist') {
//     return (
//       <td className="table__body__row__cell__options">
//         <AddIcon className="table__body__row__cell__icon" />
//       </td>
//     );
//   }

//   if (session && session.user.typeOfUser === 'Patient') {
//     return (
//       <td className="table__body__row__cell__options">
//         <DownloadIcon className="table__body__row__cell__icon" />
//       </td>
//     );
//   }
// }
// const TestRecordOptions = displayOptions();
