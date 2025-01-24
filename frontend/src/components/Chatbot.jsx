import React from 'react';
import ChatBot from 'react-simple-chatbot';
import './Chatbot.css'; // Import CSS file

function Chatbot() {
  const steps = [
    {
      id: '1',
      message: 'Hello! I am MentorAI, your guide for UPSC preparation. What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you! How can I assist you with your UPSC preparation today?',
      trigger: '4',
    },
    {
      id: '4',
      message: 'What would you like to know?',
      trigger: '5',
    },
    {
      id: '5',
      options: [
        { value: 'study materials', label: 'Study Materials', trigger: '6' },
        { value: 'exam pattern', label: 'Exam Pattern', trigger: '7' },
        { value: 'preparation tips', label: 'Preparation Tips', trigger: '8' },
      ],
    },
    {
      id: '6',
      message: 'For study materials, I recommend NCERT books, and standard reference books like Laxmikanth for Polity and Bipin Chandra for History. Do you need help with anything else?',
      trigger: '9',
    },
    {
      id: '7',
      message: 'The UPSC exam has three stages: Preliminary, Mains, and Interview. Would you like to know more about a specific stage?',
      trigger: '10',
    },
    {
      id: '8',
      message: 'Consistency is key! Try to study daily and make a timetable. Practice previous years’ papers. Would you like more tips?',
      trigger: '9',
    },
    {
      id: '9',
      options: [
        { value: 'yes', label: 'Yes', trigger: '11' },
        { value: 'no', label: 'No', trigger: '14' },
      ],
    },
    {
      id: '10',
      options: [
        { value: 'preliminary', label: 'Preliminary', trigger: '12' },
        { value: 'mains', label: 'Mains', trigger: '13' },
        { value: 'interview', label: 'Interview', trigger: '14' },
      ],
    },
    {
      id: '11',
      message: 'Great! Let me know what you want to know about or ask me anything else!',
      trigger: '4',
    },
    {
      id: '12',
      message: 'The Preliminary exam consists of two objective papers. Each paper is 200 marks. Would you like to know the syllabus?',
      trigger: '11',
    },
    {
      id: '13',
      message: 'The Mains exam consists of nine papers, including Essay and General Studies. Need more details on any specific paper?',
      trigger: '11',
    },
    {
      id: '14',
      message: 'Alright! If you have more questions later, feel free to ask. Good luck with your preparation!',
      end: true,
    },
  ];

  return (
    <ChatBot
      steps={steps}
      floating={true}
      className="chat-division" // Ensure your CSS has styles for this
      headerTitle="MentorAI" // Set the header title to MentorAI
    />
  );
}

export default Chatbot;
