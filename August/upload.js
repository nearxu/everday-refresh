<div className="upload-button">
    <form
    name="form"
    className="upload"
    id="upload"
    method="post"
    encType="multipart/form-data"
    >
    <input
        ref="file"
        className="file"
        type="file"
        name="img"
        onChange={ this.submitImg.bind(this) }
    />
    </form>
</div>


submitImg(){
    // from  表单上传文件
    var oData = new FormData(document.getElementById('upload'));
    // from 表单添加参数
    oData.append('*', *);
    oData.append('token', *);
    http.post(URL,oData,{
        headers: {
            'Content-Type': 'multipart/form-data'
          }
    })
    .then( res => {

    })
    .catch(err => {
        
    })
}