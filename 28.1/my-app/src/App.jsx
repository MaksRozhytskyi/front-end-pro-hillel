import './App.css'
import React from 'react';
import {Formik, Form, Field} from 'formik';

const App = () => (<Formik
    initialValues={{tasks: [], text: ''}}
    validateOnBlur={false}
    validateOnChange={false}
    validateOnSubmit={true}
    validate={(values) => {
        const errors = {};
        if (values.text.trim().length < 5) {
            errors.text = 'Enter more than 5 characters.';
        }
        return errors;
    }}
    onSubmit={(values, helpers) => {
        const {setFieldValue} = helpers;
        const newTasks = [...values.tasks, values.text.trim()];
        setFieldValue('tasks', newTasks);
        setFieldValue('text', '');
    }}
>
    {({handleSubmit, values, errors, submitCount}) =>
        <Form onSubmit={handleSubmit}>
            <Field name="text" component="input" placeholder="New Task"/>
            {submitCount > 0 && errors.text && (<div style={{color: 'red'}}>{errors.text}</div>)}
            <button type="submit">Add</button>
            <ul>
                {values.tasks.map((task, i) => (<li key={i}>{task}</li>))}
            </ul>
        </Form>}
</Formik>);

export default App;
