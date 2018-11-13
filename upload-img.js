// from 表单提交
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
    onChange={this.submitImg.bind(this)}
  />
</form>;

function submitImg() {
  var reader = new FileReader();
  reader.readAsDataURL(this.refs.file.files[0]);
  reader.onload = e => {
    this.setState({ base64: e.target.result });
    console.log("预览图片的base64编码为：" + e.target.result);
  };
}

function upload() {
  var oData = new FormData(document.getElementById("upload"));
  // from 表单带参数
  oData.append("remittingAmount", transferMoney);
  oData.append("remittingBank", bankIndex + 1);
  http
    .post("/trans/remitting", oData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
    .then(res => {})
    .catch(err => {});
}
