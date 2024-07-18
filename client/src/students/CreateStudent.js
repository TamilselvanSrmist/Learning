import { Row, Col, Input, DatePicker, Alert, Button, Select, Descriptions, message, Spin, InputNumber,Radio, Tag, Space,FloatButton} from 'antd';
const { Search } = Input;
const { Option } = Select;
const InputGroup = Input.Group;
export const CreateStudent = () => {
    return <section className='bg-white h-screen p-4 rounded-lg flex flex-col'>
        <h1 className='mb-4'>Student Creation Page!</h1>
        <Descriptions
         bordered
         column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
        >
            
            <Descriptions.Item label="Search User">
                            <Row gutter={[16, 16]} style={{ margin: 0 }}>
                                <Col xs={24} md={8}>
                                    <Search placeholder="Employee ID"  enterButton />
                                </Col>
                            </Row>
                        </Descriptions.Item>
                        <Descriptions.Item label="Login Information">

<Row gutter={[16, 16]} style={{ margin: 0 }}>
    <Col xs={24} md={8}>
        <Input id="USER_ID"  addonBefore="Employee ID"  />
    </Col>

    <Col xs={24} md={8}>
        <Input autoComplete="new-password" id="PASSWORD" addonBefore="Password" type='password' />
    </Col>
    <Col xs={24} md={8}>
        <Input autoComplete="new-password" id="REPASSWORD" addonBefore="Confirm Password"  />
    </Col>
</Row>

</Descriptions.Item>

<Descriptions.Item label="Personal Information">
    <Row gutter={[16,16]} style={{margin:0}}>
        <Col xs={24} md={8}>
        <Input id='name' addonBefore="Name" />

        </Col>
        <Col xs={24} md={8}>
        <Input id='initial' addonBefore="Initial" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='lastName' addonBefore="Last Name" />
        </Col>
        <Col xs={24} md={8}>
                        <Input id="age"  addonBefore="Age"  />
                    </Col>
        <Col xs={24} md={8} >
        <InputGroup>
        <Row >
            <Col xs={24} md={8}>
        <Input defaultValue='Date of Birth' disabled />
        </Col>
        <Col xs={24} md={16}>
        <DatePicker id='dob' style={{width:'100%'}}  />
        </Col>
        </Row>
        </InputGroup>
        </Col>
        <Col xs={24} md={8}  >
                        <InputGroup>
                            <Row>
                                <Col xs={24} md={8}>
                                    <Input defaultValue="* Gender" disabled className="newLabel" />
                                </Col>
                                <Col xs={24} md={16}>
                                    <Select showSearch id="gender" style={{ width: "100%" }} placeholder="* Gender" 
                                       >
                                        <Option value="MALE">Male</Option>
                                        <Option value="FEMALE">Female</Option>
                                        <Option value="TRANSGENDER">Transgender</Option>
                                    </Select>
                                </Col>
                            </Row>
                        </InputGroup>
                    </Col>
                <Col xs={24} md={8}>
                <Input id='fatherName' addonBefore='Father Name' />
                </Col>
                <Col xs={24} md={8}>
                <Input id='motherName' addonBefore='Mother Name' />
                </Col>
                <Col xs={24} md={8}>
        <InputGroup>
        <Row>
            <Col xs={24} md={8}>
            <Input defaultValue='* Blood Group' disabled/>
            </Col>
            <Col xs={24} md={16}>
            <Select showSearch id="bloodGroup" style={{ width: "100%" }} placeholder="* Blood Group" >
                <Option value="O Positive">O Positive</Option>
                <Option value="O Negative">O Negative</Option>
                <Option value="A Positive">A Positive</Option>
                <Option value="A Negative">A Negative</Option>
                <Option value="A Positive">A Positive</Option>
                <Option value="B Negative">B Negative</Option>
                <Option value="AB Positive">AB Positive</Option>
                <Option value="AB Negative">AB Negative</Option>
            </Select>
            </Col>
        </Row>
        </InputGroup>
        </Col>
        <Col xs={24} md={8}>
        <Input id='aadhar' addonBefore="Aadhar Number" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='panNumber' addonBefore="PAN Number" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='drivingLicense' addonBefore="Driving License Number" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='religion' addonBefore="Religion" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='community' addonBefore="Community" />
        </Col>
        <Col xs={24} md={8}>
        <InputGroup>
        <Row>
            <Col xs={24} md={8}>
            <Input defaultValue='Disability' disabled />
            </Col>
            <Col xs={24} md={16}>
            <Select showSearch id='physicallyChallenged' style={{width:'100%'}} placeholder='* Physically Challenged'>
                <Option value='Yes'>Yes</Option>
                <Option value='No'>No</Option>
            </Select>
            </Col>
        </Row>
        </InputGroup>
        </Col>
    </Row>
</Descriptions.Item>
<Descriptions.Item label="Contact Information">
    <Row gutter={[16,16]} style={{margin:0}} >
        <Col xs={24} md={8}>
        <Input id='doorNo' addonBefore="* Door / Flat / House / Apartments No" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='addressline1' addonBefore="* Address Line 1" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='addressline2' addonBefore="* Address Line 2" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='district' addonBefore="* City/District" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='country' addonBefore='Country' />
        </Col>
        <Col xs={24} md={8}>
        <InputGroup>
        <Row>
            <Col xs={24} md={8}>
            <Input defaultValue='* State Name' disabled/>
            </Col>
            <Col xs={24} md={16}>
            <Select showSearch id="stateName" style={{ width: "100%" }} placeholder="* State" >
                <Option value="Tamil Nadu">Tamil Nadu</Option>
                <Option value="Kerala">Kerala</Option>
                <Option value="Karnataka">Karnataka</Option>
                <Option value="Andhra Pradesh">Andhra Pradesh</Option>
            </Select>
            </Col>
        </Row>
        </InputGroup>
        </Col>
        <Col xs={24} md={8}>
        <Input id='email' addonBefore="Official Email" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='pemail' addonBefore="Personal Email" />
        </Col>
        <Col xs={24} md={8}>
        <Input id='mobile' addonBefore="Mobile Number" />
        </Col>
    </Row>
</Descriptions.Item>
<Descriptions.Item label="Instituion Details">
    <Row gutter={[16,16]} style={{margin:0}}>
        <Col xs={24} md={8}>
        <Input id='designation' addonBefore='Designation' />
        </Col>
        <Col xs={24} md={8}>
        <InputGroup>
        <Row>
            <Col xs={24} md={8} >
            <Input defaultValue='Department' disabled />
            </Col>
            <Col xs={24} md={16}>
            <Select showSearch id='department' style={{width:'100%'}} placeholder='* Department'>
              <Option value='CSE'>CSE</Option>
              <Option value='ECE'>ECE</Option>
              <Option value='EEE'>EEE</Option>
              <Option value='MECH'>MECH</Option>
              <Option value='IT'>IT</Option>
            </Select>
            </Col>
        </Row>
        </InputGroup>
        
        </Col>
        <Col xs={24} md={8}>
        <InputGroup>
        <Row>
            <Col xs={24} md={8} >
            <Input defaultValue='Role' disabled />
            </Col>
            <Col xs={24} md={16}>
            <Select showSearch id='role' style={{width:'100%'}} placeholder='* Role'>
              <Option value='Admin'>Admin</Option>
              <Option value='Dean'>Dean</Option>
              <Option value='Faculty'>Faculty</Option>
              <Option value='Student'>Student</Option>
              {/* <Option value='IT'>IT</Option> */}
            </Select>
            </Col>
        </Row>
        </InputGroup>
        
        </Col>
    </Row>
</Descriptions.Item>
{/* <Descriptions.Item label='Action'>
                           
                            </Descriptions.Item> */}

        </Descriptions>
        <div className='mt-8 flex justify-center'>
        <Row gutter={[16,16]} style={{margin:0}}>
            
                            <Col xs={24} md={8}>
                           
                            </Col>
                            <Col xs={24} md={8}>
                           
                            </Col>
                            <Col xs={24} md={8}>
                            <Space>
                            <Button type='primary' danger >Reset</Button>
                            <Button type='primary'>Save</Button>
                            </Space>
                            </Col>

                            </Row>
                            </div>
                            <FloatButton.BackTop visibilityHeight={0} />
    </section>
}