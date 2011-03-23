/*
 * Copyright 2010 by Dan Fabulich.
 * 
 * Dan Fabulich licenses this file to you under the
 * ChoiceScript License, Version 1.0 (the "License"); you may
 * not use this file except in compliance with the License. 
 * You may obtain a copy of the License at
 * 
 *  http://www.choiceofgames.com/LICENSE-1.0.txt
 * 
 * See the License for the specific language governing
 * permissions and limitations under the License.
 * 
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied.
 */


// Specify the list of scenes here, separated by commas, with no final comma

nav = new SceneNavigator([
    "startup"
    ,"animal"
    ,"variables"
    ,"gosub"
    ,"ending"
    ,"death"
    
]);

// Specify the default starting stats here

stats = {
    leadership: 50
    ,strength: 50
};

// Specify the stats to use in debug mode

debugStats = {
    leadership: 50
    ,strength: 50
};

// or just use defaults
// debugStats = stats