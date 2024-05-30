
import React, {  useState } from 'react';
import Footer from '../component/footer';
import axios from 'axios';

const HomePage = () => {


  const inputClass = 'rounded-md bg-zinc-100 p-3 w-full';
  const [fileInputs, setFileInputs] = useState([1]);
  const [files, setFiles] = useState([]);

  const addFileInput = () => {
    setFileInputs([...fileInputs, fileInputs.length + 1]);
    setFiles([...files, null]); // 파일 입력 요소가 추가될 때마다 null로 초기화된 파일 정보를 추가합니다.
  };

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    company: '', // 추가된 필드
  });



  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0]; // 선택한 파일 가져오기
    const newFiles = [...files]; // 기존 파일 배열 복사
    newFiles[index] = selectedFile; // 해당 인덱스에 파일 추가 또는 교체
    setFiles(newFiles); // 파일 상태 업데이트
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formDataToSend = new FormData();

    console.log(formData)
    console.log(files)

    formDataToSend.append('username', formData.username);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('company', formData.company);

    files.forEach((file, index) => {
      formDataToSend.append(`file${index + 1}`, file);
    });

    try {
      const response = await axios.post('http://example.com/api/resource', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('응답:', response.data);
    } catch (error) {
      console.error('오류:', error);
    }
  };


  return (
    <div className="break-keep">
      <div className='svisual_02 flex justify-center text-white font-bold h-40 text-2xl pt-20 lg:pt-40 lg:h-96 lg:text-6xl'>조사문의</div>
      <div className='flex flex-col items-center justify-center lg:p-20 p-8 pt-10 pb-10'>

        <div className='lg:w-8/12 text-center'>
          <p className='font-bold text-4xl lg:text-3.5vw text-center'>한국리서치<br className='lg:hidden' /><span className='text-c1'>Quick Survey</span>에<br />궁금한 것이 있으신가요?</p>
          <p className='lg:text-1vw text-zinc-500 lg:pt-6 lg:pb-8 text-center leading-tight pt-4 pb-4'>아래의 내용을 기재해 주시면 신속하게 답변해 드리겠습니다.</p>

          <div className='rounded-xl bg-zinc-50 p-8 mb-8 text-left'>
            <p className='flex items-center font-bold text-md pb-4'><input type="checkbox" className='bg-c1 text-white w-6 h-6 mr-2 rounded-md'></input> 개인정보 수집 및 이용 동의(필수)</p>
            <p className='lg:h-auto h-[100px] overflow-auto text-zinc-500 lg:text-1vw'>아래와 같이 개인정보를 수집, 이용하고자 합니다. 내용을 읽고 동의여부를 결정해 주시기 바랍니다.<br />
•수집항목: 소속, 직책, 성명, 연락처, 이메일<br />
•수집목적: 조사 문의에 대한 답변<br />
•보유 및 이용 기간: 1년<br />
참여자는 개인정보 수집 이용에 동의를 거부할 수 있습니다. 단, 동의 거부 시 요청하신 조사 문의에 대한 답변을 드릴 수 없습니다.</p>
          </div>
          <p className='font-bold text-left w-full pb-4'><span className='text-c1'>*</span> 필수항목 입니다.</p>
          <form onSubmit={handleSubmit}>
          <div className='rounded-xl border border-c-zinc-200 p-8 lg:p-10 text-left'>
              <ul className='grid grid-cols-2 gap-8 font-bold'>
                <li className='lg:col-span-1 col-span-2'><p className='pb-2'>소속(학교 및 학과, 연구소 등)</p> <input type="text" name="company" value={formData.company} onChange={handleChange} className={inputClass} /></li>
                <li className='lg:col-span-1 col-span-2'><p className='pb-2'>직책(교수, 박사, 석사 등)</p> <input type="text" className={inputClass} /></li>
                <li className='lg:col-span-1 col-span-2'><p className='pb-2'><span className='text-c1 pr-2'>*</span>성명</p> <input type="text" className={inputClass} /></li>
                <li className='lg:col-span-1 col-span-2'><p className='pb-2'><span className='text-c1 pr-2'>*</span>연락처</p> <input type="text" className={inputClass} /></li>
                <li className='col-span-2'><p className='pb-2'>이메일</p> <input type="text" className={inputClass} /></li>
                <li className='col-span-2'><p className='pb-2'>조사대상</p> <input type="text" className='rounded-md bg-zinc-100 p-3 w-full h-28' /></li>
                <li className='col-span-2'><p className='pb-2'>샘플수</p> <input type="text" className={inputClass} /></li>
                <li className='col-span-2'><p className='pb-2'><span className='text-c1 pr-2'>*</span>조사 및 문의 내용</p> <input type="text" className='rounded-md bg-zinc-100 p-3 w-full h-28' /></li>
                <li className='col-span-2'><p className='pb-2'>첨부 파일(설문지, 연구계획서 등) <span className='text-c1 text-sm block lg:inline'>* 설문지(초안)이 있는 경우 보다 정확한 견적을 안내 드릴 수 있습니다.</span></p> 
                {fileInputs.map((input, index) => (
                    <div key={index}>
                      <input
                        type="file"
                        className={`${inputClass} mb-2`}
                        onChange={(event) => handleFileChange(event, index)} // 인덱스 전달
                      />
                      {index === fileInputs.length - 1 && ( // 마지막 파일 입력 요소일 때만 추가 버튼 표시
                        <p
                          className='font-bold text-zinc-900 text-right pt-4 text-sm pr-4 cursor-pointer'
                          onClick={addFileInput}
                        > + 파일추가</p>
                      )}
                    </div>
                  ))}

                 </li>
              </ul>
          </div>

          <button type="submit" className='bg-c1 p-4 pl-20 pr-20 font-bold text-white text-xl rounded-full mt-6'>문의하기</button>
   

          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
