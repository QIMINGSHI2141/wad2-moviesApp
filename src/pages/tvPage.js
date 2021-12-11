import {
    searchTV
} from '../api/tmdb-api'
import { Form, Input } from 'antd-mobile'
import { useState } from 'react'
function TV() {
    const [form] = Form.useForm();
    const [tvList, setTvList] = useState([])
    console.log(tvList);

    return (
        <div style={{ "width": "1000px", "margin": "0 auto" }}>
            <Form form={form} onFinish={(values) => {
                searchTV(values).then(res => {
                    if (res.results) {
                        setTvList(res.results);
                    }else{
                        setTvList([])
                    }
                    console.log(res);
                })
            }}>
                <Form.Item label={"Query"} name={"query"}>
                    <Input placeholder='Search TV' onChange={() => form.submit()} />
                </Form.Item>
            </Form>
            <div style={{"display":"flex","justifyContent":"space-between","flexWrap":"wrap"}}>
                {tvList.map(tv=>{
                    console.log(tv);
                    return (
                        <div key={tv.id} style={{"width":"300px"}}>
                            <img src={`https://image.tmdb.org/t/p/w500/${tv.poster_path}`} width={300} height={450} alt='logo'/>
                            <p style={{"whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis"}}>{tv.overview}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default TV;