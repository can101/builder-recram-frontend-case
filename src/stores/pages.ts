import { nanoid } from 'nanoid'
import { defineStore } from 'pinia'
import {ComponentTypes} from "@/constants"

interface State {
  pages: any[]
  activePageId: string
  addItemType:ComponentTypes
  settingElementId:string
  showSetting:boolean
}

export const usePageStore = defineStore('pages', {
  state: (): State => {
    return {
      pages: [],
      activePageId: "",
      addItemType:null,
      showSetting:false,
      settingElementId:""
    }
  },
  getters: {
    getActivePageDomList(state) {
      const { pages, activePageId } = state
      const index = pages.findIndex((page) => page.pageId === this.activePageId)
      if (activePageId) {
        return pages[index].domList
      }
    }
  },
  actions: {
    updateActiveIndex(item:any){
      this.activePageId=item.pageId;
    },
    create() {
      const pageLength = this.pages.length
      const pageId = nanoid()
      if (this.pages.length == 0) {
        this.activePageId = pageId
      }
      const newPageObject = { name: `page ${pageLength + 1}`, pageId, id: pageLength, domList: [] }
      this.pages.push(newPageObject)
      this.showSetting=false;
    },
    duplicate(item: any) {
      const pageLength = this.pages.length
      const pageId = nanoid()
      this.pages.push({ ...item, name: `page ${pageLength + 1}`, pageId, id: pageLength })
    },
    delete(item: any) {
      this.pages = this.pages.filter((el) => el.id != item.id)
      if (this.activePageId == item.pageId) {
        this.activePageId = ""
      }
    },
    edit(item: any) {
      this.activePageId = item.pageId
    },
    modifyShowSeeting(bool:boolean,type?:ComponentTypes){
      this.showSetting=bool;
      if(type){
          this.addItemType=type;
      }
   },
    updateSettingElemntID(id:string){
      this.settingElementId=id;
      if(this.showSetting==true){
        this.showSetting=false;
      }
   },
    updateDomListItem(item){
      const { pages, activePageId } = this
      const index = pages.findIndex((page) => page.pageId ===activePageId);
      const d=JSON.parse(JSON.stringify(this.pages[index].domList));
      const s=d.findIndex(el=>el.id==item.id);
      d[s]=item;
      this.pages[index].domList=d;
    },
    updateActivePageDomList(list: any) {
      const pages = this.pages
      const index = pages.findIndex((page) => page.pageId === this.activePageId)
      console.log(index, pages[index])
      pages[index].domList = list
    }
  }
})
