/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var text;
var grow;
var time;
function scenario (text,grow,now_animate){
    console.log("grow = "+grow);
	console.log("parseInt =" + parseInt(grow));
	if(grow==100){
		return {
					grow:grow,
					now_a:"f"
				};
	}
	else if(grow <25){
		console.log("in?");
		if(now_animate.localeCompare("lhoax")==0){
			if(text.localeCompare("angry")==0){
				littlesadInit();
				grow = parseInt(grow) + 3;
				return {
					grow:grow,
					now_a:"lsad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("sad")==0 || text.localeCompare("natrual")==0){
				littlehoaxInit();
				return {
					grow:grow,
					now_a:"lhoax"
				};
			}
		}
		else if(now_animate.localeCompare("lhappy")==0){
			if(text.localeCompare("angry")==0){
				littleangryInit();
				return {
					grow:grow,
					now_a:"langry"
				};
			}
			else if(text.localeCompare("happy")==0){
				littlehappyInit();
				grow = parseInt(grow) + 3;
				return {
					grow:grow,
					now_a:"lhappy"
				};
			}
			else if(text.localeCompare("natrual")==0 || text.localeCompare("sad")==0){
				littlesmileInit();
				return {
					grow:grow,
					now_a:"lnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("langry")==0){
			if(text.localeCompare("angry")==0){
				littleangryInit();
				if(parseInt(grow) >3)
					grow = parseInt(grow) - 3;
				else
					grow = 0;
				return {
					grow:grow,
					now_a:"langry"
				};
			}
			else if(text.localeCompare("sad")==0){
				littlesadInit();
				return {
					grow:grow,
					now_a:"lsad"
				};
			}
			else if(text.localeCompare("natrual")==0){
				littlesmileInit();
				return {
					grow:grow,
					now_a:"lnatrual"
				};
			}
			else if(text.localeCompare("happy")==0){
				littlesmileInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"lnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("lsad")==0){
			if(text.localeCompare("angry")==0){
				littlesadInit();
				if(parseInt(grow) >3)
					grow = parseInt(grow) - 3;
				else
					grow = 0;
				return {
					grow:grow,
					now_a:"lsad"
				};
			}
			else if (text.localeCompare("sad")==0){
				littlesadInit();
				if(parseInt(grow) >1)
					grow = parseInt(grow) - 1;
				else
					grow = 0;
				return {
					grow:grow,
					now_a:"lsad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("natrual")==0){
				littlesmileInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"lnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("lnatrual")==0){
			if(text.localeCompare("happy")==0){
				littlehappyInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"lhappy"
				};
			}
			else if(text.localeCompare("natrual")==0){
				littlehoaxInit();
				grow ++;
				return {
					grow:grow,
					now_a:"lhoax"
				};
			}
			else if(text.localeCompare("sad")==0){
				littlesadInit();
				if(parseInt(grow)>2)
					grow = parseInt(grow) - 2;
				else
					grow = 0;
				return {
					grow:grow,
					now_a:"lsad"
				};
			}
			else if(text.localeCompare("angry")==0){
				littleangryInit();
				if(parseInt(grow)>1)
					grow = parseInt(grow) - 1;
				else
					grow = 0;
				return {
					grow:grow,
					now_a:"langry"
				};
			}
			else{
				alert('no');
			}
		}
	}
	else if (25<= grow && grow < 50){
		if(now_animate.localeCompare("jhoax")==0){
			if(text.localeCompare("angry")==0){
				jsadInit();
				grow = parseInt(grow) + 3;
				return {
					grow:grow,
					now_a:"jsad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("sad")==0 || text.localeCompare("natrual")==0){
				jhoaxInit();
				return {
					grow:grow,
					now_a:"jhoax"
				};
			}
		}
		else if(now_animate.localeCompare("jhappy")==0){
			if(text.localeCompare("angry")==0){
				jangryInit();
				return {
					grow:grow,
					now_a:"jangry"
				};
			}
			else if(text.localeCompare("happy")==0){
				jhappyInit();
				grow = parseInt(grow) + 3;
				return {
					grow:grow,
					now_a:"jhappy"
				};
			}
			else if(text.localeCompare("natrual")==0 || text.localeCompare("sad")==0){
				jsmileInit();
				return {
					grow:grow,
					now_a:"jnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("jangry")==0){
			if(text.localeCompare("angry")==0){
				jangryInit();
				if(parseInt(grow) >28)
					grow = parseInt(grow) - 3;
				else
					grow = 25;
				return {
					grow:grow,
					now_a:"jangry"
				};
			}
			else if(text.localeCompare("sad")==0){
				jsadInit();
				return {
					grow:grow,
					now_a:"jsad"
				};
			}
			else if(text.localeCompare("natrual")==0){
				jsmileInit();
				return {
					grow:grow,
					now_a:"jnatrual"
				};
			}
			else if(text.localeCompare("happy")==0){
				jsmileInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"jnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("jsad")==0){
			if(text.localeCompare("angry")==0){
				jsadInit();
				if(parseInt(grow) >28)
					grow = parseInt(grow) - 3;
				else
					grow = 25;
				return {
					grow:grow,
					now_a:"jsad"
				};
			}
			else if (text.localeCompare("sad")==0){
				jsadInit();
				if(parseInt(grow) >26)
					grow = parseInt(grow) - 1;
				else
					grow = 25;
				return {
					grow:grow,
					now_a:"jsad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("natrual")==0){
				jsmileInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"jnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("jnatrual")==0){
			if(text.localeCompare("happy")==0){
				jhappyInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"jhappy"
				};
			}
			else if(text.localeCompare("natrual")==0){
				jhoaxInit();
				grow ++;
				return {
					grow:grow,
					now_a:"jhoax"
				};
			}
			else if(text.localeCompare("sad")==0){
				jsadInit();
				if(parseInt(grow)>27)
					grow = parseInt(grow) - 2;
				else
					grow = 25;
				return {
					grow:grow,
					now_a:"jsad"
				};
			}
			else if(text.localeCompare("angry")==0){
				jangryInit();
				if(parseInt(grow)>26)
					grow = parseInt(grow) - 1;
				else
					grow = 25;
				return {
					grow:grow,
					now_a:"jangry"
				};
			}
			else{
				alert('no');
			}
		}
	}
	else if (50<=grow && grow<75){
		if(now_animate.localeCompare("mhoax")==0){
			if(text.localeCompare("angry")==0){
				midsadInit();
				grow = parseInt(grow) + 3;
				return {
					grow:grow,
					now_a:"msad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("sad")==0 || text.localeCompare("natrual")==0){
				midhoaxInit();
				return {
					grow:grow,
					now_a:"mhoax"
				};
			}
		}
		else if(now_animate.localeCompare("mhappy")==0){
			if(text.localeCompare("angry")==0){
				midangryInit();
				return {
					grow:grow,
					now_a:"mangry"
				};
			}
			else if(text.localeCompare("happy")==0){
				midhappyInit();
				grow = parseInt(grow) + 3;
				return {
					grow:grow,
					now_a:"mhappy"
				};
			}
			else if(text.localeCompare("natrual")==0 || text.localeCompare("sad")==0){
				midsmileInit();
				return {
					grow:grow,
					now_a:"mnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("mangry")==0){
			if(text.localeCompare("angry")==0){
				midangryInit();
				if(parseInt(grow) >53)
					grow = parseInt(grow) - 3;
				else
					grow = 50;
				return {
					grow:grow,
					now_a:"mangry"
				};
			}
			else if(text.localeCompare("sad")==0){
				midsadInit();
				return {
					grow:grow,
					now_a:"msad"
				};
			}
			else if(text.localeCompare("natrual")==0){
				midsmileInit();
				return {
					grow:grow,
					now_a:"mnatrual"
				};
			}
			else if(text.localeCompare("happy")==0){
				midsmileInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"mnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("msad")==0){
			if(text.localeCompare("angry")==0){
				midsadInit();
				if(parseInt(grow) >53)
					grow = parseInt(grow) - 3;
				else
					grow = 50;
				return {
					grow:grow,
					now_a:"msad"
				};
			}
			else if (text.localeCompare("sad")==0){
				midsadInit();
				if(parseInt(grow) >51)
					grow = parseInt(grow) - 1;
				else
					grow = 50;
				return {
					grow:grow,
					now_a:"msad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("natrual")==0){
				midsmileInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"mnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("mnatrual")==0){
			if(text.localeCompare("happy")==0){
				midhappyInit();
				grow = parseInt(grow) + 2;
				return {
					grow:grow,
					now_a:"mhappy"
				};
			}
			else if(text.localeCompare("natrual")==0){
				midhoaxInit();
				grow ++;
				return {
					grow:grow,
					now_a:"mhoax"
				};
			}
			else if(text.localeCompare("sad")==0){
				midsadInit();
				if(parseInt(grow)>52)
					grow = parseInt(grow) - 2;
				else
					grow = 50;
				return {
					grow:grow,
					now_a:"msad"
				};
			}
			else if(text.localeCompare("angry")==0){
				midangryInit();
				if(parseInt(grow)>51)
					grow = parseInt(grow) - 1;
				else
					grow = 50;
				return {
					grow:grow,
					now_a:"mangry"
				};
			}
			else{
				alert('no');
			}
		}
	}
	else if (75<=grow && grow<100){
		if(now_animate.localeCompare("budhoax")==0){
			if(text.localeCompare("angry")==0){
				budsadInit();
				if(grow>97){
					grow = 100;
				}
				else {
					grow = parseInt(grow) + 3;
				}
				return {
					grow:grow,
					now_a:"budsad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("sad")==0 || text.localeCompare("natrual")==0){
				budhoaxInit();
				return {
					grow:grow,
					now_a:"budhoax"
				};
			}
		}
		else if(now_animate.localeCompare("budhappy")==0){
			if(text.localeCompare("angry")==0){
				budangryInit();
				return {
					grow:grow,
					now_a:"budangry"
				};
			}
			else if(text.localeCompare("happy")==0){
				budhappyInit();
				if(grow>97){
					grow = 100;
				}
				else{
					grow = parseInt(grow) + 3;
				}
				return {
					grow:grow,
					now_a:"budhappy"
				};
			}
			else if(text.localeCompare("natrual")==0 || text.localeCompare("sad")==0){
				budsmileInit();
				return {
					grow:grow,
					now_a:"budnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("budangry")==0){
			if(text.localeCompare("angry")==0){
				budangryInit();
				if(parseInt(grow) >78)
					grow = parseInt(grow) - 3;
				else
					grow = 75;
				return {
					grow:grow,
					now_a:"budangry"
				};
			}
			else if(text.localeCompare("sad")==0){
				budsadInit();
				return {
					grow:grow,
					now_a:"budsad"
				};
			}
			else if(text.localeCompare("natrual")==0){
				budsmileInit();
				return {
					grow:grow,
					now_a:"budnatrual"
				};
			}
			else if(text.localeCompare("happy")==0){
				budsmileInit();
				if(grow > 98){
					grow = 100;
				}
				else{
					grow = parseInt(grow) + 2;
				}
				return {
					grow:grow,
					now_a:"budnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("budsad")==0){
			if(text.localeCompare("angry")==0){
				budsadInit();
				if(parseInt(grow) >78)
					grow = parseInt(grow) - 3;
				else
					grow = 75;
				return {
					grow:grow,
					now_a:"budsad"
				};
			}
			else if (text.localeCompare("sad")==0){
				budsadInit();
				if(parseInt(grow) >76)
					grow = parseInt(grow) - 1;
				else
					grow = 75;
				return {
					grow:grow,
					now_a:"budsad"
				};
			}
			else if(text.localeCompare("happy")==0 || text.localeCompare("natrual")==0){
				budsmileInit();
				if(grow > 98){
					grow = 100;
				}
				else{
					grow = parseInt(grow) + 2;
				}
				return {
					grow:grow,
					now_a:"budnatrual"
				};
			}
		}
		else if(now_animate.localeCompare("budnatrual")==0){
			if(text.localeCompare("happy")==0){
				budhappyInit();
				if(grow > 98){
					grow = 100;
				}
				else{
					grow = parseInt(grow) + 2;
				}
				return {
					grow:grow,
					now_a:"budhappy"
				};
			}
			else if(text.localeCompare("natrual")==0){
				budhoaxInit();
				grow ++;
				return {
					grow:grow,
					now_a:"budhoax"
				};
			}
			else if(text.localeCompare("sad")==0){
				budsadInit();
				if(parseInt(grow)>77)
					grow = parseInt(grow) - 2;
				else
					grow = 75;
				return {
					grow:grow,
					now_a:"budsad"
				};
			}
			else if(text.localeCompare("angry")==0){
				budangryInit();
				if(parseInt(grow)>76)
					grow = parseInt(grow) - 1;
				else
					grow = 75;
				return {
					grow:grow,
					now_a:"budangry"
				};
			}
			else{
				alert('no');
			}
		}
	}
}

