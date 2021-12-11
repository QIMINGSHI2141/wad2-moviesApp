import { Form, Input } from "antd-mobile";
import { useState } from 'react'
import {
    searchCompany
} from '../api/tmdb-api'

function Company() {
    const [form] = Form.useForm();
    const [companyList, setCompanyList] = useState([])

    return (
        <div style={{"width": "1000px", "margin": "0 auto"}}>
            <Form form={form} onFinish={(values) => {
                searchCompany(values).then(res => {
                    console.log(res);
                    if (res.results) {
                        setCompanyList(res.results)
                    } else {
                        setCompanyList([])
                    }

                })
            }}>
                <Form.Item label="Query" name='query'>
                    <Input placeholder="Search Company" onChange={() => form.submit()} />
                </Form.Item>
            </Form>
            <div style={{ "display": "flex", "justifyContent": "space-between", "flexWrap": "wrap" }}>

                {
                    companyList.map(item => {
                        if (!item.logo_path) {
                            return null;
                        }
                        return (
                            <div key={item.id} style={{ "border": "1px solid #e5e5e5", "margin": "20px 0","padding":"20px" }}>
                                <img src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`} height={100} />
                                <p style={{"textAlign":"center","fontSize":"18px","fontWeight":"bold"}}>{item.name}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Company;