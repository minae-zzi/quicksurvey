import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import Footer from '../component/footer';

const HomePage = () => {
  const history = useNavigate();
  const inputClass = 'rounded-md bg-zinc-100 p-3 w-full';
  const [fileInputs, setFileInputs] = useState([1]);
  const [files, setFiles] = useState([]);

  const addFileInput = () => {
    setFileInputs([...fileInputs, fileInputs.length + 1]);
    setFiles([...files, null]);
  };

// 사용자 입력에서 보안 문제를 일으킬 수 있는 코드를 필터링할 정규식
const securityRegExp = /<\s*(\b(script|iframe|embed|object|frameset|frame|applet)\b)[^>]*>.*?<\/\1>|on\w+\s*=|javascript\s*:/gi;
const securityMessage = '스크립트 코드는 입력할 수 없습니다.';

// 이메일 체크 정규식
const emailRegExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const emailMessage = '올바른 이메일 형식이어야 합니다.';


const validateFile = (file) => {
  if (!file) return false; // 파일이 없으면 유효성 검사 실패

  // 파일 확장자 검사
  const fileExtension = file.name.split('.').pop().toLowerCase();
  const isExecutable = /\.(exe|dll|bat|cmd)$/i.test(fileExtension);
  if (isExecutable) {
    return false; // 실행 파일은 등록할 수 없음
  }

  // 파일 크기 검사 (100MB 제한)
  const maxSize = 100 * 1024 * 1024; // 100MB
  const isOverSize = file.size > maxSize;
  if (isOverSize) {
    return false; // 100MB를 초과하는 파일은 등록할 수 없음
  }

  return true; // 모든 유효성 검사 통과
};



// 사용자 입력에서 너무 많은 글자수를 입력하는 것을 방지할 최대 글자수
const maxLength = 200;


// 유효성 검사 스키마
const validationSchema = Yup.object().shape({
  company: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage),
  q_position: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage),
  q_name: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage)
    .required('필수항목입니다.'),
  call_num: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage)
    .required('필수항목입니다.'),
  email: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(emailRegExp, emailMessage),
  target: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage),
  sample: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage),
  memo: Yup.string()
    .max(maxLength, `글자 수는 ${maxLength}자를 초과할 수 없습니다.`)
    .matches(/^(?![\s\S]*<.*>).{0,200}$/, securityMessage)
    .required('필수항목입니다.'),

    files: Yup.array().of(
      Yup.mixed().test('file', '파일을 첨부해 주세요.', (value) => {
        return value ? validateFile(value) : true;
      })
    ),
    

});



  const handleFileChange = (event, index) => {
    const selectedFile = event.target.files[0];
    const newFiles = [...files];
    newFiles[index] = selectedFile;
    setFiles(newFiles);
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

          <Formik
            initialValues={{ 
              company: '',
              q_position: '',
              q_name: '',
              call_num: '',
              email: '',
              target: '',
              sample: '',
              memo: '', 
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              const formDataToSend = new FormData();
            
              formDataToSend.append('company', values.company);
              formDataToSend.append('q_position', values.q_position);
              formDataToSend.append('q_name', values.q_name);
              formDataToSend.append('call_num', values.call_num);
              formDataToSend.append('email', values.email);
              formDataToSend.append('target', values.target);
              formDataToSend.append('sample', values.sample);
              formDataToSend.append('memo', values.memo);
            
              files.forEach((file, index) => {
                formDataToSend.append(`file${index + 1}`, file);
              });
            
              console.log('Form Data to Send:', {
                company: values.company,
                q_position: values.q_position,
                q_name: values.q_name,
                call_num: values.call_num,
                email: values.email,
                target: values.target,
                sample: values.sample,
                memo: values.memo,
                files: files,
              });
            
              console.log('Submitting to backend...');
              // axios.post로 서버에 데이터를 전송하는 코드는 주석처리되어 있습니다. 이 부분을 활성화하고 실제 서버 URL로 수정해야 합니다.
              axios.post('https://61.78.75.166:8443/api/data', formDataToSend, {
                withCredentials: true,
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
                .then((response) => {
                  console.log('응답:', response.data);
                  history('/complete');
                })
                .catch((error) => {
                  console.error('오류:', error);
                })
                .finally(() => {
                  setSubmitting(false);
                  console.log('폼 제출 완료');
                });
            
              // 서버 통신 대신 setTimeout을 사용하여 가상의 응답을 받습니다.
              setTimeout(() => {
                console.log('Submission successful!');
                setSubmitting(false);
              }, 1000);
            }}
          >
            {({ isSubmitting }) => (
              <Form method="post">
                <div className='rounded-xl border border-c-zinc-200 p-8 lg:p-10 text-left'>
                  <ul className='grid grid-cols-2 gap-8 font-bold'>
                    <li className='lg:col-span-1 col-span-2'>
                      <p className='pb-2'>소속(학교 및 학과, 연구소 등)</p> 
                      <Field type="text" name="company" className={inputClass}/>
                      <ErrorMessage name="company" component="div" className="text-red-500" />
                    </li>
                    <li className='lg:col-span-1 col-span-2'>
                      <p className='pb-2'>직책(교수, 박사, 석사 등)</p> 
                      <Field type="text" name="q_position" className={inputClass} />
                      <ErrorMessage name="q_position" component="div" className="text-red-500" />
                    </li>
                    <li className='lg:col-span-1 col-span-2'>
                      <p className='pb-2'><span className='text-c1 pr-2'>*</span>성명</p> 
                      <Field type="text" name="q_name" className={inputClass} />
                      <ErrorMessage name="q_name" component="div" className="text-red-500" />
                    </li>
                    <li className='lg:col-span-1 col-span-2'>
                      <p className='pb-2'><span className='text-c1 pr-2'>*</span>연락처</p> 
                      <Field type="text" name="call_num" className={inputClass} />
                      <ErrorMessage name="call_num" component="div" className="text-red-500" />
                    </li>
                    <li className='col-span-2'>
                      <p className='pb-2'>이메일</p>
                      <Field type="text" name="email" placeholder="예: email@email.com (@를 포함한 전체 이메일 주소를 입력해주세요.)" className={inputClass} />
                      <ErrorMessage name="email" component="div" className="text-red-500" />
                    </li>
                    <li className='col-span-2'>
                      <p className='pb-2'>조사대상</p> 
                      <Field type="text" name="target" className='rounded-md bg-zinc-100 p-3 w-full h-28' />
                      <ErrorMessage name="target" component="div" className="text-red-500" />
                    </li>
                    <li className='col-span-2'>
                      <p className='pb-2'>샘플수</p> 
                      <Field type="text" name="sample" className={inputClass} />
                      <ErrorMessage name="sample" component="div" className="text-red-500" />
                    </li>
                    <li className='col-span-2'>
                      <p className='pb-2'><span className='text-c1 pr-2'>*</span>조사 및 문의 내용</p> 
                      <Field type="text" name="memo" className='rounded-md bg-zinc-100 p-3 w-full h-28' />
                      <ErrorMessage name="memo" component="div" className="text-red-500" />
                    </li>
                    <li className='col-span-2'>
                      <p className='pb-2'>첨부 파일(설문지, 연구계획서 등) <span className='text-c1 text-sm block lg:inline'> 설문지(초안)이 있는 경우 보다 정확한 견적을 안내 드릴 수 있습니다.</span></p>
                      <ErrorMessage name="files" component="div" className="text-red-500" />
                      <div>
                      {fileInputs.map((input, index) => (
  <div key={index}>
    <Field
      name={`files[${index}]`}
      type="file"
      className={`${inputClass} mb-2`}
      onChange={(event) => handleFileChange(event, index)}
    />
    {index === fileInputs.length - 1 && (
      <p
        className='font-bold text-zinc-900 text-right pt-4 text-sm pr-4 cursor-pointer'
        onClick={addFileInput}
      > + 파일추가</p>
    )}
    <ErrorMessage name={`files[${index}]`} component="div" className="text-red-500" />
  </div>
))}


                      </div>
                    </li>
                  </ul>
                </div>

                <button type="submit" disabled={isSubmitting} className='bg-c1 p-4 pl-20 pr-20 font-bold text-white text-xl rounded-full mt-6'>
                  {isSubmitting ? '제출 중...' : '문의하기'}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
