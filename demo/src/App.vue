<template>
  <div>
    <!--3、使用AppHeader.vue组件-->
    <AppHeader></AppHeader>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <AppSilder></AppSilder>
            </div>
            <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                <h2 class="sub-header">Hero List</h2>
                <a class="btn btn-success" href="add.html">Add</a>
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>Header</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1,001</td>
                                <td>Lorem</td>
                                <td>ipsum</td>
                                <td>dolor</td>
                                <td>sit</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,002</td>
                                <td>amet</td>
                                <td>consectetur</td>
                                <td>adipiscing</td>
                                <td>elit</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>Integer</td>
                                <td>nec</td>
                                <td>odio</td>
                                <td>Praesent</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,003</td>
                                <td>libero</td>
                                <td>Sed</td>
                                <td>cursus</td>
                                <td>ante</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,004</td>
                                <td>dapibus</td>
                                <td>diam</td>
                                <td>Sed</td>
                                <td>nisi</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,005</td>
                                <td>Nulla</td>
                                <td>quis</td>
                                <td>sem</td>
                                <td>at</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,006</td>
                                <td>nibh</td>
                                <td>elementum</td>
                                <td>imperdiet</td>
                                <td>Duis</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,007</td>
                                <td>sagittis</td>
                                <td>ipsum</td>
                                <td>Praesent</td>
                                <td>mauris</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,008</td>
                                <td>Fusce</td>
                                <td>nec</td>
                                <td>tellus</td>
                                <td>sed</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,009</td>
                                <td>augue</td>
                                <td>semper</td>
                                <td>porta</td>
                                <td>Mauris</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,010</td>
                                <td>massa</td>
                                <td>Vestibulum</td>
                                <td>lacinia</td>
                                <td>arcu</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,011</td>
                                <td>eget</td>
                                <td>nulla</td>
                                <td>Class</td>
                                <td>aptent</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,012</td>
                                <td>taciti</td>
                                <td>sociosqu</td>
                                <td>ad</td>
                                <td>litora</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,013</td>
                                <td>torquent</td>
                                <td>per</td>
                                <td>conubia</td>
                                <td>nostra</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,014</td>
                                <td>per</td>
                                <td>inceptos</td>
                                <td>himenaeos</td>
                                <td>Curabitur</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                            <tr>
                                <td>1,015</td>
                                <td>sodales</td>
                                <td>ligula</td>
                                <td>in</td>
                                <td>libero</td>
                                <td>
                                    <a href="edit.html">edit</a> &nbsp;&nbsp;
                                    <a href="javascript:window.confirm('Are you sure?')">delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                     <!--
                        <router-view></router-view> 组件标签是给路由看的，默认啥都没有
                        它不是固定的，它标识路由出口标记
                        当路由匹配到 path xxx 的时候，会将 router-view 替换到我们在路由表中配置好的组件
                    -->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
    

  
</template>

<script>
    //1、导入AppHeader.vue组件
    import AppHeader from './components/AppHeader.vue';
    import AppSilder from './components/AppSilder.vue';
    export default {
      name: 'app',
      data() {
        return {

        }
      },
      //2、注册AppHeader组件
      components:{
        //注意命名
        AppHeader:AppHeader,
        AppSilder:AppSilder
      }

    }

</script>

<style lang="scss">
  

</style>
