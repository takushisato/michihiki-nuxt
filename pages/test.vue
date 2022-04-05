<template>
   <div id="app">
    <select v-model="selectedKey" v-on:change="selected()">
        <option v-for="prefecture in prefectures" :key="prefecture.name">
            {{ prefecture.name }}
        </option>
    </select>
    
    <select>
        <option v-if="ports" v-for="port in ports" :key="port.portName">
            {{ port.portName }}
        </option>
    </select>
    <button>Submit!</button>
</div>
</template>
 
<script>
import { prefectures } from '~/datas/prefecturesData.js';
import { timeDatas } from '~/datas/timeData.js';


export default {
    data() {
        return {
        selectedKey: '',
        prefectures: prefectures,
        prefecture: '',
        ports: [],
        }
    },
    methods:{
        selected: function(){
            this.ports = this.prefecture.port;
            return this.ports;
        }
    }
};

</script>

//  v-if="selectedItem" 