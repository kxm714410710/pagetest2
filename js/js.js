$.ajax({
    url: "http://111.198.71.91:8000/lefun/dic/read/citysByProvince",
    type: "post",
    success: function (data) {
        var ohtmlpro = "<option>省份</option>";
        var ohtmlcity = "";
        //console.log(prov)
        if (data.code == 00) {
            //省份
            $.each(data.object.cityAndProvinceList.provinceList, function (k, v) {
                //console.log(v.proName)
                //console.log(v.proId)
                ohtmlpro += '<option value=' + v.proId + '>' + v.proName + '</option>';
            });

            $("#province").html(ohtmlpro);
            //点击省份对应城市
            $("#province").on('change', function () {
                ohtmlcity = "";
                var proIndex = $(this).val();
                //城市
                $.each(data.object.cityAndProvinceList.cityList, function (k, v) {
                    // console.log(v.proId);
                    if (proIndex == v.proId) {
                        console.log(v.cityName);
                        ohtmlcity += '<option>' + v.cityName + '</option>'
                    }
                });
                $("#city").html(ohtmlcity);
            })

        } else {
            alert("请求失败")
        }
    }
})